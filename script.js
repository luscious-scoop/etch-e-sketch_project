const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 16; i++) {
  let row = document.createElement("div");
  row.classList.add("row");

  for (let j = 1; j <= 16; j++) {
    let box = document.createElement("div");
    box.classList.add("grid-box");
    box.textContent = `${j}`;
    row.appendChild(box);
  }
  gridContainer.appendChild(row);
}
