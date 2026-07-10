/** Vanilla DomeGallery — inspired by React Bits */
(function () {
  const DEFAULTS = { segments: 22, dragSensitivity: 20, maxVerticalRotationDeg: 5 };

  function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }
  function normalizeAngle(d) { return ((d % 360) + 360) % 360; }
  function wrapAngleSigned(deg) { const a = (((deg + 180) % 360) + 360) % 360; return a - 180; }

  function buildItems(pool, seg) {
    const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
    const evenYs = [-4, -2, 0, 2, 4];
    const oddYs = [-3, -1, 1, 3, 5];
    const coords = xCols.flatMap((x, c) => {
      const ys = c % 2 === 0 ? evenYs : oddYs;
      return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
    });
    const normalized = pool.length ? pool.map(p => typeof p === "string" ? { src: p, alt: "" } : p) : [];
    return coords.map((c, i) => {
      const p = normalized[i % Math.max(normalized.length, 1)] || { src: "", alt: "" };
      return { ...c, src: p.src || "", alt: p.alt || "" };
    });
  }

  function computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments) {
    const unit = 360 / segments / 2;
    return {
      rotateX: unit * (offsetY - (sizeY - 1) / 2),
      rotateY: unit * (offsetX + (sizeX - 1) / 2)
    };
  }

  class DomeGallery {
    constructor(root, images) {
      this.root = root;
      this.images = images;
      this.segments = DEFAULTS.segments;
      this.rotation = { x: 0, y: 0 };
      this.startRot = { x: 0, y: 0 };
      this.startPos = null;
      this.dragging = false;
      this.moved = false;
      this.lastDragEnd = 0;
      this.focusedEl = null;
      this.opening = false;

      this.main = root.querySelector(".sphere-main");
      this.sphere = root.querySelector(".sphere");
      this.viewer = root.querySelector(".viewer");
      this.scrim = root.querySelector(".scrim");
      this.frame = root.querySelector(".frame");

      root.style.setProperty("--segments-x", this.segments);
      root.style.setProperty("--segments-y", this.segments);
      this.render();
      this.bindDrag();
      this.bindResize();
      this.scrim.addEventListener("click", () => this.closeEnlarge());
      window.addEventListener("keydown", e => { if (e.key === "Escape") this.closeEnlarge(); });
    }

    gradients(i) {
      const g = [
        "linear-gradient(135deg,#3d2848,#c8b8f0)",
        "linear-gradient(135deg,#4a3028,#f4b8a0)",
        "linear-gradient(135deg,#283848,#a8e8dc)",
        "linear-gradient(135deg,#382838,#f5c4d8)",
        "linear-gradient(135deg,#2a2838,#e8945a)"
      ];
      return g[i % g.length];
    }

    render() {
      const items = buildItems(this.images, this.segments);
      this.sphere.innerHTML = "";
      items.forEach((it, i) => {
        const item = document.createElement("div");
        item.className = "item";
        item.dataset.offsetX = it.x;
        item.dataset.offsetY = it.y;
        item.dataset.sizeX = it.sizeX;
        item.dataset.sizeY = it.sizeY;
        item.style.setProperty("--offset-x", it.x);
        item.style.setProperty("--offset-y", it.y);
        item.style.setProperty("--item-size-x", it.sizeX);
        item.style.setProperty("--item-size-y", it.sizeY);
        const face = document.createElement("div");
        face.className = "item__image";
        if (it.src) {
          face.innerHTML = `<img src="${it.src}" alt="${it.alt}">`;
        } else {
          face.innerHTML = `<div style="width:100%;height:100%;background:${this.gradients(i)}"></div>`;
        }
        face.addEventListener("click", e => this.onTileClick(e, face, item, it));
        item.appendChild(face);
        this.sphere.appendChild(item);
      });
      this.applyTransform(this.rotation.x, this.rotation.y);
    }

    applyTransform(xDeg, yDeg) {
      this.sphere.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }

    bindResize() {
      const ro = new ResizeObserver(entries => {
        const { width: w, height: h } = entries[0].contentRect;
        const radius = clamp(Math.min(w, h) * 0.52, 280, 520);
        this.root.style.setProperty("--radius", radius + "px");
        this.applyTransform(this.rotation.x, this.rotation.y);
      });
      ro.observe(this.root);
    }

    bindDrag() {
      const onDown = e => {
        if (this.focusedEl) return;
        this.dragging = true;
        this.moved = false;
        this.startRot = { ...this.rotation };
        this.startPos = { x: e.clientX, y: e.clientY };
      };
      const onMove = e => {
        if (!this.dragging || !this.startPos || this.focusedEl) return;
        const dx = e.clientX - this.startPos.x;
        const dy = e.clientY - this.startPos.y;
        if (!this.moved && dx * dx + dy * dy > 16) this.moved = true;
        const nextX = clamp(this.startRot.x - dy / DEFAULTS.dragSensitivity, -DEFAULTS.maxVerticalRotationDeg, DEFAULTS.maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(this.startRot.y + dx / DEFAULTS.dragSensitivity);
        this.rotation = { x: nextX, y: nextY };
        this.applyTransform(nextX, nextY);
      };
      const onUp = () => {
        if (this.dragging && this.moved) this.lastDragEnd = performance.now();
        this.dragging = false;
      };
      this.main.addEventListener("pointerdown", onDown);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    }

    onTileClick(e, el, parent, photo) {
      if (this.dragging || this.moved) return;
      if (performance.now() - this.lastDragEnd < 80) return;
      if (this.opening) return;
      this.openEnlarge(el, parent, photo);
    }

    openEnlarge(el, parent, photo) {
      this.opening = true;
      document.body.classList.add("dg-scroll-lock");
      this.focusedEl = el;
      el.style.visibility = "hidden";
      const parentRot = computeItemBaseRotation(+parent.dataset.offsetX, +parent.dataset.offsetY, +parent.dataset.sizeX, +parent.dataset.sizeY, this.segments);
      const rotY = wrapAngleSigned(-(normalizeAngle(parentRot.rotateY) + normalizeAngle(this.rotation.y)));
      const rotX = -parentRot.rotateX - this.rotation.x;
      parent.style.setProperty("--rot-y-delta", rotY + "deg");
      parent.style.setProperty("--rot-x-delta", rotX + "deg");
      const tileR = el.getBoundingClientRect();
      const mainR = this.main.getBoundingClientRect();
      const frameR = this.frame.getBoundingClientRect();
      const overlay = document.createElement("div");
      overlay.className = "enlarge";
      overlay.style.cssText = `left:${frameR.left - mainR.left}px;top:${frameR.top - mainR.top}px;width:${frameR.width}px;height:${frameR.height}px;opacity:0`;
      overlay.innerHTML = photo.src
        ? `<img src="${photo.src}" alt="${photo.alt}"><div class="photo-caption"><h3>${photo.alt || "Still"}</h3></div><button type="button" class="photo-close">Close</button>`
        : `<div style="width:100%;height:100%;background:linear-gradient(135deg,#3d2848,#c8b8f0)"></div><button type="button" class="photo-close">Close</button>`;
      this.viewer.appendChild(overlay);
      const tx = tileR.left - frameR.left, ty = tileR.top - frameR.top;
      const sx = tileR.width / frameR.width, sy = tileR.height / frameR.height;
      overlay.style.transform = `translate(${tx}px,${ty}px) scale(${sx},${sy})`;
      requestAnimationFrame(() => {
        overlay.style.opacity = "1";
        overlay.style.transform = "translate(0,0) scale(1,1)";
        this.root.setAttribute("data-enlarging", "true");
      });
      overlay.querySelector(".photo-close").addEventListener("click", e => { e.stopPropagation(); this.closeEnlarge(); });
      this.currentOverlay = overlay;
      this.opening = false;
    }

    closeEnlarge() {
      if (!this.focusedEl || !this.currentOverlay) return;
      const el = this.focusedEl;
      const parent = el.parentElement;
      this.currentOverlay.remove();
      this.currentOverlay = null;
      parent.style.setProperty("--rot-y-delta", "0deg");
      parent.style.setProperty("--rot-x-delta", "0deg");
      el.style.visibility = "";
      this.focusedEl = null;
      this.root.removeAttribute("data-enlarging");
      document.body.classList.remove("dg-scroll-lock");
    }
  }

  window.initDomeGallery = function (rootId, images) {
    const root = document.getElementById(rootId);
    if (root) new DomeGallery(root, images);
  };
})();
