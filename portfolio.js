/** Portfolio video data — paths relative to site root or external embed URLs */
const PORTFOLIO_CATEGORIES = [
  {
    id: "music",
    title: "Music Films",
    subtitle: "Narrative × Mood × Rhythm",
    accent: "#c8b8f0",
    gradient: "linear-gradient(145deg, #2a1a38 0%, #120c18 100%)",
    videos: [
      { id: "m1", title: "AAKHARI PRAYANAM", year: "2024", src: "https://www.youtube.com/embed/S-HUNgsKFgk" },
      { id: "m2", title: "GNYANA PADAM", year: "2024", src: "https://www.youtube.com/embed/Cc4o2e1dO2I" },
      { id: "m3", title: "RAAVA NAATHO", year: "2024", src: "https://www.youtube.com/embed/7Zo0dAcWRas" },
      { id: "m4", title: "ANTHA ANUKUNNA", year: "2024", src: "https://www.youtube.com/embed/q_KzCmJqfV0" },
      { id: "m5", title: "Ek KURDSI 🪑", year: "2024", src: "https://www.youtube.com/embed/PjEpqkuByAQ" },
      { id: "m6", title: "EE ROJU ANTU", year: "2024", src: "https://www.youtube.com/embed/rhZXcDwTtR0" },
      { id: "m7", title: "Music Reel", year: "2024", src: "https://www.instagram.com/reel/DZaolNWREHC/" },
      { id: "m8", title: "STREETVIOLATER", year: "2024", src: "https://www.youtube.com/embed/gs4qOBaCyzs" },
      { id: "m9", title: "AISICH HU", year: "2024", src: "https://www.youtube.com/embed/9ezQw9-wvqw" }
    ]
  },
  {
    id: "ad",
    title: "AD Films",
    subtitle: "Brand × Impact × Persuasion",
    accent: "#f4b8a0",
    gradient: "linear-gradient(145deg, #3a2418 0%, #120c10 100%)",
    videos: [
      { id: "a1", title: "Addidas", year: "2024", src: "videos/AD-films/Addidas.mp4" },
      { id: "a2", title: "Car", year: "2024", src: "videos/AD-films/car.mp4" },
      { id: "a3", title: "Shoes", year: "2024", src: "videos/AD-films/SHOES.mp4" },
      { id: "a4", title: "Switch Zoom", year: "2023", src: "videos/AD-films/switchzoom.mp4" },
      { id: "a5", title: "Promo Final", year: "2024", src: "videos/AD-films/PROMO_final1.mp4" },
      { id: "a6", title: "Ugly Human Cap", year: "2023", src: "videos/AD-films/Ugly human cap 1.mp4" },
      { id: "a7", title: "August Promo", year: "2024", src: "videos/AD-films/1 Final promo august.mp4" }
    ]
  },
  {
    id: "films",
    title: "Films",
    subtitle: "Story × Character × Arc",
    accent: "#d4c4a8",
    gradient: "linear-gradient(145deg, #2a2820 0%, #12100c 100%)",
    videos: [
      { id: "f1", title: "We Are Livin' The Dream", year: "2024", src: "https://www.youtube.com/embed/NSalYzMR4Iw" },
      { id: "f2", title: "Ek KURDSI 🪑", year: "2024", src: "https://www.youtube.com/embed/PjEpqkuByAQ" },
      { id: "f3", title: "Upload your film", year: "2024", src: "" }
    ]
  },
  {
    id: "djing-concert",
    title: "DJing & Concert",
    subtitle: "Energy × Crowd × Live",
    accent: "#e8945a",
    gradient: "linear-gradient(145deg, #382818 0%, #120c08 100%)",
    videos: [
      { id: "dc1", title: "Concert College", year: "2024", src: "videos/concert-films'/2 Concert college.mp4" },
      { id: "dc2", title: "Infosys", year: "2024", src: "videos/concert-films'/3 infosys.mp4" },
      { id: "dc3", title: "Reel Concert College", year: "2023", src: "videos/concert-films'/4 reel Concert college.mp4" },
      { id: "dc4", title: "2_1 Final", year: "2024", src: "videos/DJING-films/2_1 final.mp4" },
      { id: "dc5", title: "DJ Perch", year: "2024", src: "videos/DJING-films/34dj_perch.mp4" },
      { id: "dc6", title: "3 Party", year: "2023", src: "videos/DJING-films/3Party.mp4" },
      { id: "dc7", title: "4 Club", year: "2024", src: "videos/DJING-films/4CLUB.mp4" },
      { id: "dc8", title: "Kayan 6", year: "2024", src: "videos/DJING-films/kayan6.mp4" }
    ]
  },
  {
    id: "di",
    title: "DI",
    subtitle: "Grade × Tone × Finish",
    accent: "#a8e8dc",
    gradient: "linear-gradient(145deg, #183028 0%, #081210 100%)",
    videos: [
      { id: "di1", title: "Upload DI project", year: "2024", src: "" },
      { id: "di2", title: "Upload DI project", year: "2024", src: "" },
      { id: "di3", title: "Upload DI project", year: "2024", src: "" }
    ]
  },
  {
    id: "dance",
    title: "Dance Films",
    subtitle: "Movement × Rhythm × Frame",
    accent: "#f5c4d8",
    gradient: "linear-gradient(145deg, #381828 0%, #120810 100%)",
    videos: [
      { id: "df1", title: "Upload dance film", year: "2024", src: "" },
      { id: "df2", title: "Upload dance film", year: "2024", src: "" },
      { id: "df3", title: "Upload dance film", year: "2024", src: "" }
    ]
  },
  {
    id: "bts",
    title: "DOP BTS",
    subtitle: "Behind × Lens × Process",
    accent: "#b8c8f0",
    gradient: "linear-gradient(145deg, #1a2038 0%, #0c1018 100%)",
    videos: [
      { id: "bts1", title: "Upload BTS clip", year: "2024", src: "" },
      { id: "bts2", title: "Upload BTS clip", year: "2024", src: "" },
      { id: "bts3", title: "Upload BTS clip", year: "2024", src: "" }
    ]
  },
  {
    id: "reels",
    title: "REELS",
    subtitle: "Short × Sharp × Social",
    accent: "#e8a89c",
    gradient: "linear-gradient(145deg, #382428 0%, #120c10 100%)",
    videos: [
      { id: "r1", title: "Reel 01", year: "2024", src: "https://www.instagram.com/reel/DZaolNWREHC/" },
      { id: "r2", title: "Upload your reel", year: "2024", src: "" },
      { id: "r3", title: "Upload your reel", year: "2024", src: "" }
    ]
  },
  {
    id: "breakdown",
    title: "Breakdown",
    subtitle: "Process × Light × Craft",
    accent: "#d4a8e8",
    gradient: "linear-gradient(145deg, #281838 0%, #100818 100%)",
    videos: [
      { id: "bd1", title: "Gnyana Padam Timeline 🖌", year: "2024", src: "https://www.instagram.com/reel/DTDVhrMgoPR/" },
      { id: "bd2", title: "When light becomes the storyteller", year: "2024", src: "https://www.youtube.com/embed/emFXJYA8ryY" },
      { id: "bd3", title: "Clone Glow Split", year: "2024", src: "https://www.youtube.com/embed/q8Z3GajPxKg" },
      { id: "bd4", title: "GODZILLA MUMBAI Breakdown", year: "2024", src: "https://www.youtube.com/embed/wcxxVI8lFWI" }
    ]
  }
];

const HERO_VIDEO = "https://www.youtube.com/embed/0-q3Kj_IOfY";
const LOGO_SRC = "images/logo.png";
const PROFILE_PHOTO = "images/About-me/About-me.png";
const INSTAGRAM_URL = "https://www.instagram.com/l_rawog_fx?igsh=MW80cmxwaXlmaTZlaQ==";

/** Gallery photos — repeated across the dome sphere */
const GALLERY_PHOTOS = [
  { src: "images/gallery-01.jpg", alt: "Fashion portrait" },
  { src: "images/gallery-02.jpg", alt: "Street style" },
  { src: "images/gallery-03.webp", alt: "Dance rhythm" },
  { src: "images/gallery-04.jpg", alt: "Cinematic energy" },
  { src: "images/gallery-05.jpg", alt: "Cool tone drip" },
  { src: "images/gallery-06.jpg", alt: "Cool tone portrait" },
  { src: "images/gallery-07.jpg", alt: "Cool tone heavy drip" },
  { src: "images/gallery-08.webp", alt: "Editorial frame" },
  { src: "images/gallery-09.webp", alt: "Rise like smoke" },
  { src: "images/gallery-10.webp", alt: "Smoke portrait" },
  { src: "images/gallery-11.jpg", alt: "UH HUH editorial" },
  { src: "images/gallery-12.jpg", alt: "UH HUH street frame" }
];

/** Encode local image paths for safe URLs */
function mediaSrc(path) {
  if (!path || path.startsWith("http")) return path;
  return path.split("/").map((part, i) => (i === 0 ? part : encodeURIComponent(part))).join("/");
}
