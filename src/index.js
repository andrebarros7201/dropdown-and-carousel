const divContent = document.querySelector("#content");

const title = document.createElement("h1");
title.classList.add("page-title");
divContent.appendChild(title);

const nav = document.querySelector("nav");
nav.classList.add("navbar");

const dropdownButton = document.createElement("button");
dropdownButton.textContent = "Dropdown Example";
dropdownButton.classList.add("navbar-button");

nav.appendChild(dropdownButton);

const carouselButton = document.createElement("button");
carouselButton.textContent = "Carousel";
carouselButton.classList.add("navbar-button");

nav.appendChild(carouselButton);
