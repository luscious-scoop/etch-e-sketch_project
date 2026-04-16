const gridContainer = document.querySelector(".grid-container");
const container = document.querySelector(".container");
const createBtn = document.querySelector("#create-btn");
const colorPicker = document.querySelector("#color-box");
createGrid();

createBtn.addEventListener("click", () => {
  let gridSize = +prompt("Enter");
  createGrid(gridSize);
  hoveringGrid();
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

function hoveringGrid() {
  let boxes = document.querySelectorAll(".grid-box");
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "blue";
    });
  });
  boxes.forEach((box) => {
    box.addEventListener("mouseleave", () => {
      box.style.backgroundColor = "white";
    });
  });
}

hoveringGrid();
