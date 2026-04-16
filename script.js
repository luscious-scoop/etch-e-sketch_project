const gridContainer = document.querySelector(".grid-container");
const container = document.querySelector(".container");
const createBtn = document.querySelector("#create-btn");

createBtn.addEventListener("click", () => {
  let gridSize = +prompt("Enter");
  createGrid(gridSize);
});

function createGrid(size = 16) {
  document.querySelectorAll(".row").forEach((row) => {
    gridContainer.removeChild(row);
  });

  for (let i = 1; i <= size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 1; j <= size; j++) {
      let box = document.createElement("div");
      box.classList.add("grid-box");

      row.appendChild(box);
    }
    gridContainer.appendChild(row);
  }
}

createGrid();
