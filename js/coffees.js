const REPO_URL = "https://gjohnn.github.io/DigitalrsProject-dotNET/";
const currentURL = window.location.origin + window.location.pathname.replace(/\/$/, "");
const BASE_URL = currentURL.startsWith(REPO_URL) ? REPO_URL : "";
const coffees = [
  {
    name: "Americano",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo nec ligula blandit scelerisque.",
    image: `${BASE_URL}/imgs/prods/coffees/coffee_americano.jpg`,
  },
  {
    name: "Latte",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo nec ligula blandit scelerisque.",
    image: `${BASE_URL}/imgs/prods/coffees/coffee_latte.jpg`,
  },
  {
    name: "Cappuccino",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo nec ligula blandit scelerisque.",
    image: `${BASE_URL}/imgs/prods/coffees/cappuccino.jpg`,
  },
];
export default coffees;