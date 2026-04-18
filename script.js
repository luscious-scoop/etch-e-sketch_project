const gridContainer = document.querySelector(".grid-container");
const container = document.querySelector(".container");
const createBtn = document.querySelector("#create-btn");
const colorPicker = document.querySelector("#color-box");
const defaultColor = "#0000FF";
let selectedColor = defaultColor;
createGrid();
hoveringGrid(selectedColor);

createBtn.addEventListener("click", () => {
  let gridSize = +prompt("Enter");
  createGrid(gridSize);
  hoveringGrid(selectedColor);
});

colorPicker.addEventListener("input", (event) => {
  selectedColor = event.target.value;
  hoveringGrid(selectedColor);
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

function hoveringGrid(color) {
  let boxes = document.querySelectorAll(".grid-box");
  boxes.forEach((box) => {
    box.addEventListener("mousedown", () => {
      box.style.backgroundColor = color;
    });
  });
}
