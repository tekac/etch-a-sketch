const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear-btn");
const sliderValue = document.querySelector(".slider-value");
const slider = document.querySelector(".slider");
const rgbBtn = document.querySelector(".rgb-btn");
const shadeBtn = document.querySelector(".shade-btn");
let isDrawing;
sliderValue.textContent = slider.value;

// RGB Controls
rgbBtn.addEventListener("click", () => {
  rgbBtn.classList.toggle("rgb-on");
});

// Shader Controls
shadeBtn.addEventListener("click", () => {
  shadeBtn.classList.toggle("shade-on");
});

// CREATE GRID
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
        if (rgbBtn.classList.contains("rgb-on")) {
          let ran = randColor();
          cell.style.backgroundColor = `rgb(${ran[0]},${ran[1]},${ran[2]})`;
        } else {
          cell.style.backgroundColor = "black";
        }
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
  return arr;
};

const LightenColor = function (color, percent) {
  var num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;

  return (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1);
};

const clearGrid = () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => (item.style.backgroundColor = ""));
};
clearBtn.addEventListener("click", clearGrid);

makeRows(16, 16);
