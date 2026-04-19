const gridContainer = document.querySelector(".grid-container");
const container = document.querySelector(".container");
const createBtn = document.querySelector("#create-btn");
const colorPicker = document.querySelector("#color-box");
const defaultColor = "#0000FF";
let selectedColor = defaultColor;

// random color event
const randomBtn = document.querySelector("#randomize-btn");
randomBtn.addEventListener("click", randomColor);

// resetting or erasing grid
const resetBtn = document.querySelector("#reset-btn");
const eraserBtn = document.querySelector("#eraser-btn");

eraserBtn.addEventListener("click", eraser);
resetBtn.addEventListener("click", resetGrid);

// initialize grid
createGrid();
coloringGrid(selectedColor);
colorPicker.value = selectedColor;

// main event listeners
createBtn.addEventListener("click", () => {
  let gridSize = +prompt("Enter Grid Size(max=100)");
  if (isNaN(gridSize) || !Number.isInteger(gridSize)) {
    alert("Enter a valid Number!");
  } else if (gridSize > 100 || gridSize < 1) {
    alert("Enter a number between 1 and 100");
  } else {
    createGrid(gridSize);
    colorPicker.value = selectedColor;
    coloringGrid(selectedColor);
  }
});

colorPicker.addEventListener("input", (event) => {
  selectedColor = event.target.value;
  coloringGrid(selectedColor);
  colorPicker.value = selectedColor;
});

// Main functions
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

function coloringGrid(color) {
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
    box.addEventListener("mousedown", () => {
      box.style.backgroundColor = color;
    });
  });
}
// resetting functions
function resetGrid() {
  document.querySelectorAll(".grid-box").forEach((box) => {
    box.style.backgroundColor = "white";
  });
  colorPicker.value = selectedColor;
}

function eraser() {
  document.querySelectorAll(".grid-box").forEach((box) => {
    box.addEventListener("dragStart", (e) => {
      e.preventDefault();
    });
    box.addEventListener("mouseover", (e) => {
      if (e.buttons === 1) {
        box.style.backgroundColor = "white";
      }
    });
    box.addEventListener("mousedown", () => {
      box.style.backgroundColor = "white";
    });
  });
}

function randomColor() {
  let intervalId;
  let color;
  intervalId = setInterval(() => {
    rgb1 = Math.floor(Math.random() * 256);
    rgb2 = Math.floor(Math.random() * 256);
    rgb3 = Math.floor(Math.random() * 256);
    color = `rgb(${rgb1},${rgb2},${rgb3})`;
    coloringGrid(color);
  }, 500);
  document.querySelectorAll(".selection-item").forEach((item) => {
    item.addEventListener("click", () => {
      clearInterval(intervalId);
      colorPicker.value = color;
    });
  });
}
