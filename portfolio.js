/** Portfolio video data — YouTube + Instagram embeds */

const PORTFOLIO_CATEGORIES = [
  {
    id: "music",
    title: "Music Films",
    subtitle: "Narrative × Mood × Rhythm",
    accent: "#d4a8e8",
    gradient: "linear-gradient(145deg, #281838 0%, #100818 100%)",
    videos: [
      { id: "mf1", title: "AAKHARI PRAYANAM", year: "2024", youtubeId: "S-HUNgsKFgk", isShort: false },
      { id: "mf2", title: "Raava Naatho", year: "2024", youtubeId: "7Zo0dAcWRas", isShort: false },
      { id: "mf3", title: "StreetViolater", year: "2024", youtubeId: "gs4qOBaCyzs", isShort: false },
      { id: "mf4", title: "BadVibesssss", year: "2024", youtubeId: "fKtwEqhca04", isShort: false },
      { id: "mf5", title: "Antha Anukunna", year: "2024", youtubeId: "q_KzCmJqfV0", isShort: false },
      { id: "mf6", title: "AISICH HU", year: "2024", youtubeId: "9ezQw9-wvqw", isShort: false },
      { id: "mf7", title: "Calory 🚀🎧", year: "2024", instagramId: "DZaolNWREHC", isShort: true },
      { id: "mf8", title: "EE ROJU ANTU", year: "2024", youtubeId: "rhZXcDwTtR0", isShort: false },
      { id: "mf9", title: "Gaanjaayinichillu", year: "2024", instagramId: "DZxq40Kta6D", isShort: true }
    ]
  },
  {
    id: "films",
    title: "Films",
    subtitle: "Story × Character × Arc",
    accent: "#d4c4a8",
    gradient: "linear-gradient(145deg, #2a2820 0%, #12100c 100%)",
    videos: [
      { id: "f1", title: "We Are Livin' The Dream", year: "2024", youtubeId: "NSalYzMR4Iw", isShort: false },
      { id: "f2", title: "Ek Kursi 🪑", year: "2024", youtubeId: "PjEpqkuByAQ", isShort: false }
    ]
  },
  {
    id: "di",
    title: "DI",
    subtitle: "Grade × Tone × Finish",
    accent: "#a8e8dc",
    gradient: "linear-gradient(145deg, #183028 0%, #081210 100%)",
    videos: [
      { id: "di1", title: "When light becomes the storyteller", year: "2024", youtubeId: "emFXJYA8ryY", isShort: false },
      { id: "di2", title: "AAKHARI PRAYANAM", year: "2024", youtubeId: "rTYTMoGKcLQ", isShort: false }
    ]
  },
  {
    id: "commercials-reels",
    title: "Commercials & Reels",
    subtitle: "Brand × Energy × Social",
    accent: "#f4b8a0",
    gradient: "linear-gradient(145deg, #3a2418 0%, #120c10 100%)",
    videos: [
      { id: "cr1", title: "RAP 91", year: "2024", youtubeId: "T3exmjrovsk", isShort: true },
      { id: "cr2", title: "Radio Mirchi", year: "2024", youtubeId: "WkCZEbtI9yI", isShort: true },
      { id: "cr3", title: "Spyker Dharmik Promo", year: "2024", youtubeId: "iYTgaJGBpzs", isShort: true },
      { id: "cr4", title: "NENINTHE Formula Breakdown", year: "2024", youtubeId: "oPyM6Gqmh0c", isShort: true },
      { id: "cr5", title: "NENINTHE GARUDA PURANAM Breakdown", year: "2024", youtubeId: "hA38mD7NIEg", isShort: true },
      { id: "cr6", title: "TAQ", year: "2024", youtubeId: "4hhm95lZ6Sw", isShort: false },
      { id: "cr7", title: "Cafe", year: "2024", youtubeId: "4MX6kk2TQds", isShort: true },
      { id: "cr8", title: "INTIMASIA EVENT", year: "2024", youtubeId: "F3W3SguZxik", isShort: true },
      { id: "cr9", title: "HYD FOOD DIARIES", year: "2024", youtubeId: "y6hsh5k7DVc", isShort: true },
      { id: "cr10", title: "Quake", year: "2024", youtubeId: "y4zr5ESzHP0", isShort: true },
      { id: "cr11", title: "DECCAN DOMINATION", year: "2024", youtubeId: "YZwqXJJnzC8", isShort: true },
      { id: "cr12", title: "Interior", year: "2024", youtubeId: "Muyp2HTwY9E", isShort: true }
    ]
  },
  {
    id: "dance",
    title: "Dance Films",
    subtitle: "Movement × Performance × Frame",
    accent: "#f5c4d8",
    gradient: "linear-gradient(145deg, #381828 0%, #120810 100%)",
    videos: [
      { id: "df1", title: "Dherya Kandari", year: "2024", youtubeId: "WwqfD_IckQ8", isShort: true },
      { id: "df2", title: "Aaryan Mengaji - Marathi Film Child Actor", year: "2024", youtubeId: "WxC-KnfkI2E", isShort: true },
      { id: "df3", title: "Rohit Mankar", year: "2024", youtubeId: "Www4mbhPg4Q", isShort: true },
      { id: "df4", title: "Barood - Rakesh & Navin", year: "2024", youtubeId: "eCGKJcysq3g", isShort: true },
      { id: "df5", title: "DIVINE - Gunehgar", year: "2024", youtubeId: "rBCK4tJIsek", isShort: true },
      { id: "df6", title: "Ashish Patil", year: "2024", youtubeId: "QvGPKeuesAw", isShort: true }
    ]
  },
  {
    id: "vfx-creative",
    title: "VFX & Creative",
    subtitle: "Concept × Edit × Experiment",
    accent: "#b8c8f0",
    gradient: "linear-gradient(145deg, #1a2038 0%, #0c1018 100%)",
    videos: [
      { id: "vc1", title: "Creative Stuff VFX", year: "2024", youtubeId: "CxHN6YxKOL4", isShort: true },
      { id: "vc2", title: "Clone Glow Split", year: "2024", youtubeId: "q8Z3GajPxKg", isShort: false }
    ]
  },
  {
    id: "ad",
    title: "Ad Films",
    subtitle: "Brand × Impact × Persuasion",
    accent: "#e8a89c",
    gradient: "linear-gradient(145deg, #382428 0%, #120c10 100%)",
    videos: [
      { id: "ad1", title: "Adidas", year: "2024", youtubeId: "O1coh28UpBI", isShort: true },
      { id: "ad2", title: "Sentiments India", year: "2024", youtubeId: "mUqoOhI23wU", isShort: false },
      { id: "ad3", title: "McDonald's", year: "2024", youtubeId: "Fm48rqoe5oA", isShort: true },
      { id: "ad4", title: "Kalaadrip", year: "2024", youtubeId: "VadPjREzyeg", isShort: true },
      { id: "ad5", title: "Ugly Human Cap", year: "2024", youtubeId: "kJ7dG2AfyUI", isShort: true },
      { id: "ad6", title: "Ugly Human 2", year: "2024", youtubeId: "Mgo8KoGyY0I", isShort: true },
      { id: "ad7", title: "Sentiments India 2", year: "2024", youtubeId: "m4x8X8ODVSY", isShort: false },
      { id: "ad8", title: "Good Flippin Burgers", year: "2024", youtubeId: "F5M1vapOAwU", isShort: true },
      { id: "ad9", title: "Ugly Human 3", year: "2024", youtubeId: "PpG9ipI1-YU", isShort: true },
      { id: "ad10", title: "Ugly Human 4", year: "2024", youtubeId: "VTIiqs9r0-c", isShort: true },
      { id: "ad11", title: "Ugly Human 5", year: "2024", youtubeId: "JkpQAjkrSsc", isShort: true }
    ]
  },
  {
    id: "breakdown",
    title: "Breakdown",
    subtitle: "Process × Light × Craft",
    accent: "#c8b8f0",
    gradient: "linear-gradient(145deg, #2a1a38 0%, #120c18 100%)",
    videos: [
      { id: "bd1", title: "Aisich Hun Breakdown", year: "2024", youtubeId: "XcScFmhHKWA", isShort: false },
      { id: "bd2", title: "Gnyana Padama Timeline Breakdown", year: "2024", youtubeId: "-PJVGfCPFdI", isShort: false },
      { id: "bd3", title: "GODZILLA MUMBAI Breakdown", year: "2024", youtubeId: "wcxxVI8lFWI", isShort: false }
    ]
  }
];

const HERO_VIDEO = "videos/hero_teaser.mp4";
const LOGO_SRC = "images/logo.png";
const PROFILE_PHOTO = "images/About-me/Aboutme.webp";
const COLLAB_PHOTO = "images/About-me/fotter.png";
const INSTAGRAM_URL = "https://www.instagram.com/l_rawog_fx_studio/";
const CONTACT_PHONES = ["8446644093", "9284707820"];

const GALLERY_PHOTOS = [
  { src: "images/gallery-01.jpg", alt: "Fashion portrait" },
  { src: "images/gallery-02.jpg", alt: "Street style" },
  { src: "images/2.webp", alt: "Editorial portrait" },
  { src: "images/3.webp", alt: "Street frame" },
  { src: "images/4.webp", alt: "Fashion still" },
  { src: "images/5.webp", alt: "Urban portrait" },
  { src: "images/6.webp", alt: "Cinematic still" },
  { src: "images/7.webp", alt: "Editorial energy" },
  { src: "images/gallery-03.webp", alt: "Dance rhythm" },
  { src: "images/gallery-04.jpg", alt: "Cinematic energy" },
  { src: "images/gallery-05.jpg", alt: "Cool tone drip" },
  { src: "images/gallery-06.jpg", alt: "Cool tone portrait" },
  { src: "images/gallery-07.jpg", alt: "Cool tone heavy drip" },
  { src: "images/gallery-08.webp", alt: "Editorial frame" },
  { src: "images/gallery-09.webp", alt: "Rise like smoke" },
  { src: "images/gallery-10.webp", alt: "Smoke portrait" },
  { src: "images/gallery-11.jpg", alt: "UH HUH editorial" },
  { src: "images/gallery-12.jpg", alt: "UH HUH street frame" },
  { src: "images/If this was a movie, this would be the pause scenes ❤️🫠#varanasiClick by -- @l_rawog_fx_studi.webp", alt: "Varanasi pause scene" }
];

function mediaSrc(path) {
  if (!path || path.startsWith("http")) return path;
  return path.split("/").map((part, i) => (i === 0 ? part : encodeURIComponent(part))).join("/");
}
