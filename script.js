const container = document.querySelector(".container");

const makeRows = (rows, cols) => {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mousemove", () => {
      cell.style.backgroundColor = "black";
    });
  }
};

makeRows(16, 16);
