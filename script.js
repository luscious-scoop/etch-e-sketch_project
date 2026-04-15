const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 16; i++) {
  const gridRow = document.createElement("div");
  gridRow.classList.add("grid-row");
  let newBox = document.createElement("div");
  newBox.classList.add("grid-box");
  newBox.textContent = `${i}`;
  gridRow.appendChild(newBox);
  for (let j = 1; j <= 16; j++) {
    gridContainer.appendChild(gridRow);
  }
}
