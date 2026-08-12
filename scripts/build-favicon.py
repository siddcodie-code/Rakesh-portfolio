from PIL import Image, ImageEnhance, ImageFilter
import os
import base64
from io import BytesIO

ROOT = os.path.join(os.path.dirname(__file__), "..", "images")
PROJ = os.path.join(os.path.dirname(__file__), "..")
LOGO = os.path.join(ROOT, "logo.png")


def prep_logo(include_studio=False):
    logo = Image.open(LOGO).convert("RGBA")
    w, h = logo.size
    ch = int(h * (0.78 if include_studio else 0.52))
    crop = logo.crop((0, 0, w, ch))
    rgb = Image.new("RGBA", crop.size, (10, 9, 9, 255))
    rgb.paste(crop, (0, 0), crop)
    rgb = ImageEnhance.Contrast(rgb).enhance(1.35)
    return ImageEnhance.Brightness(rgb).enhance(1.05)


def render(src, size, min_render=128):
    pad = int(size * 0.06)
    inner = size - pad * 2
    rw = max(min_render, size * 4)
    cw, ch = src.size
    scale = min(inner / cw, inner / ch)
    nw = int(cw * scale * (rw / size))
    nh = int(ch * scale * (rw / size))
    big = src.resize((nw, nh), Image.Resampling.LANCZOS)
    big = big.filter(ImageFilter.UnsharpMask(radius=1.5, percent=200, threshold=1))
    canvas = Image.new("RGBA", (rw, rw), (10, 9, 9, 255))
    canvas.paste(big, ((rw - nw) // 2, (rw - nh) // 2), big)
    return canvas.resize((size, size), Image.Resampling.LANCZOS).convert("RGB")


wordmark = prep_logo(False)
full = prep_logo(True)

for name, sz in [("favicon-16.png", 16), ("favicon-32.png", 32), ("favicon-48.png", 48)]:
    render(wordmark, sz).save(os.path.join(ROOT, name), "PNG")

render(full, 180).save(os.path.join(ROOT, "apple-touch-icon.png"), "PNG")

buf = BytesIO()
render(wordmark, 256).save(buf, format="PNG")
b64 = base64.b64encode(buf.getvalue()).decode("ascii")
svg_path = os.path.join(ROOT, "favicon.svg")
with open(svg_path, "w", encoding="utf-8") as f:
    f.write(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="L_RAWOG_FX">\n'
        f'  <image width="32" height="32" href="data:image/png;base64,{b64}"/>\n'
        "</svg>"
    )

img16 = Image.open(os.path.join(ROOT, "favicon-16.png"))
img32 = Image.open(os.path.join(ROOT, "favicon-32.png"))
img16.save(os.path.join(PROJ, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32)])
print("Favicons rebuilt from logo")
