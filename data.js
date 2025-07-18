// data.js

const songs = [
  {
    id: "DTYbfiPeQHI",
    title: "Chhri rang rangili Remix kamlesh barot",
    category: "Remix Chill out",
    type: "youtube"
  },
  {
    id: "1vYafZ_Pb7Y",
    title: "DJ Jungle Tribal Beat",
    category: "Adivasi",
    type: "youtube"
  },
  {
    id: "https://drive.google.com/uc?id=1K1AbC_XYZ123&export=download",
    title: "Garba 2024 Hit",
    category: "Gujarati",
    type: "gdrive"
  },
  {
    id: "https://drive.google.com/uc?id=1LxFv_example_45&export=download",
    title: "Bhajan - Jay Mataji",
    category: "Devotional",
    type: "gdrive"
  }
];

localStorage.setItem("songs", JSON.stringify(songs));
