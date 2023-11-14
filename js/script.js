const container = document.querySelector(".container");
const changeGrid = document.querySelector(".changeGrid");

container.style = "width: 256px; height: 256px";

drawGrids();
changeGrid.addEventListener("click", customGrid);

function drawGrids(noOfSquares = 16, width = 256 / noOfSquares) {
  for (let i = 0; i < noOfSquares; i++) {
    for (let row = 0; row < noOfSquares; row++) {
      const grids = document.createElement("div");
      grids.className = "grids";
      grids.style = `width: ${width}px; height: ${width}px;`;
      container.appendChild(grids);
    }
  }
}

function customGrid() {
  let squares, newWidth;

  do {
    squares = +prompt("Enter custom grid size between 1-100 inclusively.");
  } while (squares < 1 || squares > 100);

  newWidth = 256 / squares;
  container.textContent = "";
  drawGrids(squares, newWidth);
}
