/** Portfolio video data — YouTube only */

const PORTFOLIO_CATEGORIES = [
  {
    id: "breakdown-music",
    title: "Breakdown & Music",
    subtitle: "Process × Rhythm × Story",
    accent: "#c8b8f0",
    gradient: "linear-gradient(145deg, #2a1a38 0%, #120c18 100%)",
    videos: [
      { id: "bm1", title: "Aisich Hun Breakdown", year: "2024", youtubeId: "XcScFmhHKWA", isShort: false },
      { id: "bm2", title: "Gnyana Padama Timeline Breakdown", year: "2024", youtubeId: "-PJVGfCPFdI", isShort: false },
      { id: "bm3", title: "NENINTHE Formula Breakdown", year: "2024", youtubeId: "oPyM6Gqmh0c", isShort: true },
      { id: "bm4", title: "NENINTHE GARUDA PURANAM Breakdown", year: "2024", youtubeId: "hA38mD7NIEg", isShort: true }
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
      { id: "cr4", title: "TAQ", year: "2024", youtubeId: "4hhm95lZ6Sw", isShort: false },
      { id: "cr5", title: "Cafe", year: "2024", youtubeId: "4MX6kk2TQds", isShort: true },
      { id: "cr6", title: "INTIMASIA EVENT", year: "2024", youtubeId: "F3W3SguZxik", isShort: true },
      { id: "cr7", title: "HYD FOOD DIARIES", year: "2024", youtubeId: "y6hsh5k7DVc", isShort: true },
      { id: "cr8", title: "Quake", year: "2024", youtubeId: "y4zr5ESzHP0", isShort: true },
      { id: "cr9", title: "DECCAN DOMINATION", year: "2024", youtubeId: "YZwqXJJnzC8", isShort: true },
      { id: "cr10", title: "Interior", year: "2024", youtubeId: "Muyp2HTwY9E", isShort: true }
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
    accent: "#a8e8dc",
    gradient: "linear-gradient(145deg, #183028 0%, #081210 100%)",
    videos: [
      { id: "vc1", title: "Creative Stuff VFX", year: "2024", youtubeId: "CxHN6YxKOL4", isShort: true }
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
  }
];



const HERO_VIDEO = "videos/Final_moksham_teaser_web.mp4";

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


