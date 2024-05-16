import { dropdownContent } from "./dropdown";
import "./style.css";

const divContent = document.querySelector("#content");

const title = document.createElement("h1");
title.classList.add("page-title");
title.textContent = "Dropdown and Carousel Examples";

divContent.appendChild(title);

const nav = document.createElement("nav");
nav.classList.add("navbar");
divContent.appendChild(nav);

const dropdownButton = document.createElement("button");
dropdownButton.textContent = "Dropdown Example";
dropdownButton.classList.add("navbar-button");

dropdownButton.addEventListener("click", () => {
  dropdownContent();
});

nav.appendChild(dropdownButton);

const carouselButton = document.createElement("button");
carouselButton.textContent = "Carousel";
carouselButton.classList.add("navbar-button");

nav.appendChild(carouselButton);

const mainDiv = document.createElement("div");
mainDiv.classList.add("div-main");
divContent.appendChild(mainDiv);
