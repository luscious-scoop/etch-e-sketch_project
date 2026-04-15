const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 32; i++) {
  let newBox = document.createElement("div");
  newBox.textContent = `${i}`;
  newBox.classList.add("grid-box");
  gridContainer.appendChild(newBox);
}
