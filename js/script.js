let pixelSize, squares, newWidthAndHeight;
let color = "aqua";
const container = document.querySelector(".container");
const changeGrid = document.querySelector(".changeGrid");
const settings = document.querySelector(".settings");

container.style = "width: 256px; height: 256px";

drawGrids();
changeGrid.addEventListener("click", customGrid);
container.addEventListener("mouseenter", paint);
settings.addEventListener("click", setting);

function setting(evt) {
  const targetChild = evt.target;

  switch (targetChild.className) {
    case "clear":
      clearGrids();
      break;
    case "random":
      randomColor();
      break;
    case "rainbow":
      color = null;
      break;
    case "erase":
      color = "";
      break;
  }
}

function drawGrids(noOfSquares = 16, widthAndHeight = 256 / noOfSquares) {
  pixelSize = widthAndHeight;
  for (let i = 0; i < noOfSquares; i++) {
    for (let row = 0; row < noOfSquares; row++) {
      const grids = document.createElement("div");
      grids.className = "grids";
      grids.style = `width: ${widthAndHeight}px; height: ${widthAndHeight}px;`;
      container.appendChild(grids);
    }
  }
}

function customGrid() {
  do {
    squares = +prompt("Enter custom grid size between 1-100 inclusively.");
  } while (squares < 1 || squares > 100);

  newWidthAndHeight = 256 / squares;
  container.textContent = "";
  drawGrids(squares, newWidthAndHeight);
}

function paint() {
  const pixels = document.querySelectorAll(".container div");

  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseleave", () => {
      pixel.style = `width: ${pixelSize}px; height: ${pixelSize}px; background-color: ${
        color !== null
          ? color
          : color === null
          ? `rgb(${randomNo(255)}, ${randomNo(255)}, ${randomNo(255)})`
          : ""
      };`;
    });
  });
}

function clearGrids() {
  container.textContent = "";
  drawGrids(squares, newWidthAndHeight);
}

function randomNo(num) {
  return Math.floor(Math.random() * (num + 1));
}

function randomColor() {
  color = `rgb(${randomNo(255)}, ${randomNo(255)}, ${randomNo(255)})`;
}
