const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 64; i++) {
  let row = document.createElement("div");
  row.classList.add("row");

  for (let j = 1; j <= 64; j++) {
    let box = document.createElement("div");
    box.classList.add("grid-box");

    row.appendChild(box);
  }
  gridContainer.appendChild(row);
}
