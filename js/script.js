const container = document.querySelector(".container");

container.style = "width: 256px; height: 256px";

for (let i = 0; i < 16; i++) {
  for (let row = 0; row < 16; row++) {
    const grids = document.createElement("div");
    grids.style = "width: 16px; height: 16px; display: inline-block";
    container.appendChild(grids);
  }
}
