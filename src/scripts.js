const gridContainer = document.querySelector('.grid-container');
let colorSelected = document.getElementById("color-select");

for (let i = 0; i < 16 * 16; i++) {
  const gridCell = document.createElement('div');

  gridCell.classList.add('grid-cell');
  gridContainer.appendChild(gridCell);
};
