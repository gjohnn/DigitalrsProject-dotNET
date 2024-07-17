const REPO_URL = "https://gjohnn.github.io/DigitalrsProject-dotNET/";
const currentURL = window.location.origin + window.location.pathname.replace(/\/$/, "");
const BASE_URL = currentURL.startsWith(REPO_URL) ? REPO_URL : "";
const cakes = [
  {
    name: "Cheesecake de Nutella",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo nec ligula blandit scelerisque.",
    image: `${BASE_URL}/imgs/prods/cakes/cheesecake_nutella.jpg`,
  },
  {
    name: "Chocotorta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo nec ligula blandit scelerisque.",
    image: `${BASE_URL}/imgs/prods/cakes/chocotorta.jpg`,
  },
  {
    name: "Selva Negra",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo nec ligula blandit scelerisque.",
    image: `${BASE_URL}/imgs/prods/cakes/selva_negra.jpg`,
  },
];

export default cakes;