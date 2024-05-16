const dropdownContent = () => {
  const mainDiv = document.querySelector(".div-main");
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }

  const buttonExample = document.createElement("button");
  buttonExample.textContent = "Example Button";
  buttonExample.classList.add("button-example");
  buttonExample.addEventListener("click", () => {
    divDropdown.classList.toggle("show");
  });

  mainDiv.appendChild(buttonExample);

  const divDropdown = document.createElement("div");
  divDropdown.classList.add("div-dropdown");

  const item1 = document.createElement("a");
  item1.classList.add("dropdown-item");
  item1.textContent = "Item 1";

  divDropdown.appendChild(item1);

  const item2 = document.createElement("a");
  item2.classList.add("dropdown-item");
  item2.textContent = "Item 2";

  divDropdown.appendChild(item2);
  mainDiv.appendChild(divDropdown);
};

export { dropdownContent };
