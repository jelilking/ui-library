import Tooltip from "./ninja-ui/tooltip.js";
import Dropdown from "./ninja-ui/dropdown.js";
import Tabs from "./ninja-ui/tabs.js";
import Snackbar from "./ninja-ui/snackbar.js";

//create a tooltip instance
const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

//create a dropdown
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  // dropdown instance
  const instance = new Dropdown(dropdown);
  instance.init();
});

//create tabs

const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector(".snackbar-trigger");
button.addEventListener("click", () => {
  snackbar.show("you clicked me :)");
});
