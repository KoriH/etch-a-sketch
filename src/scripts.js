// Get colour input, get the color, on new input event refresh the color value
const colorSelected = document.getElementById("color-select");
let color = colorSelected.value;

colorSelected.addEventListener('input', function() {
    color = colorSelected.value;
});

const gridContainer = document.querySelector('.grid-container'); // add event listener for when cursor is off container

// check for mouse down
let isMouseDown = false;
// create the containers, add event listener for colouring.
for (let i = 0; i < 16 * 16; i++) {
    const gridCell = document.createElement('div');

    gridCell.classList.add('grid-cell');
    
    gridCell.addEventListener('mousedown', function() {
        isMouseDown = true;
        this.style.backgroundColor = color;   
    });
    gridCell.addEventListener('mousemove', function() {
        if (isMouseDown) {
            this.style.backgroundColor = color;
        };
    });
    gridCell.addEventListener('mouseup', function() {
        isMouseDown = false;
    });
    gridContainer.appendChild(gridCell);
};

// erase, check if true, if yes then set color to background color
let isErase = false;
document.getElementById('erase').addEventListener('click', function() {
    isErase = !isErase;

    if (isErase) {
        color = gridContainer.style.backgroundColor;
    } else {
        color = colorSelected.value;
    }
});

// if button is clicked all grid is set to background colour
document.getElementById('reset').addEventListener('click', function() {
    const gridCell = document.getElementsByClassName('grid-cell');
    for (let i = 0; i < gridCell.length; i++) {
        gridCell[i].style.backgroundColor = gridContainer.style.backgroundColor;
    }
});

// 
const bgColourSelect = document.getElementById('bg-color-select');
let bgColor = bgColourSelect.value;

bgColourSelect.addEventListener('input', function() {
    let gridcells = document.getElementsByClassName('grid-cell');
    bgColor = bgColourSelect.value;
    for (let i = 0; i < gridcells.length; i++){
        gridcells[i].style.backgroundColor = bgColor
    };
});