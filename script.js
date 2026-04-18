const gridContainer = document.querySelector(".grid-container");
const container = document.querySelector(".container");
const createBtn = document.querySelector("#create-btn");
const colorPicker = document.querySelector("#color-box");
const defaultColor = "#0000FF";
let selectedColor = defaultColor;
createGrid();
colorPicker.value = selectedColor;
hoveringGrid(selectedColor);

createBtn.addEventListener("click", () => {
  let gridSize = +prompt("Enter");
  createGrid(gridSize);
  colorPicker.value = selectedColor;
  hoveringGrid(selectedColor);
});

colorPicker.addEventListener("input", (event) => {
  selectedColor = event.target.value;
  hoveringGrid(selectedColor);
  colorPicker.value = selectedColor;
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
    box.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });
  });
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      if (e.buttons === 1) {
        box.style.backgroundColor = color;
      }
    });
  });
}
