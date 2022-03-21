const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear-btn");
const sliderValue = document.querySelector(".slider-value");
const slider = document.querySelector(".slider");
let isDrawing;
sliderValue.textContent = slider.value;

const makeRows = (rows, cols) => {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.style.height = 600 / `(${rows} * ${cols})`;

    cell.addEventListener("mousedown", () => {
      isDrawing = true;
    });
    cell.addEventListener("mousemove", () => {
      if (isDrawing === true) {
        cell.style.backgroundColor = "black";
      }
    });
    cell.addEventListener("mouseup", () => {
      if (isDrawing === true) {
        isDrawing = false;
      }
    });
  }
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

slider.addEventListener("input", () => {
  let val = slider.value;
  sliderValue.textContent = val;
  removeAllChildNodes(container);
  makeRows(val, val);
});

const randColor = () => {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 255);
    arr.push(random);
  }
  console.log(arr);
};

const clearGrid = () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => (item.style.backgroundColor = ""));
};
clearBtn.addEventListener("click", clearGrid);

makeRows(16, 16);
