const container = document.querySelector(".container");
let interval_;
let isDrawing;

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

makeRows(16, 16);
