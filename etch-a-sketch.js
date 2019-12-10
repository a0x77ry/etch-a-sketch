const multiplier = 64;
const gridSize = multiplier * 10;
let numberOfSideSquares = 16;
let squareSize = gridSize / numberOfSideSquares;
let gridItemBorderSize = 1;

const mainGrid = document.querySelector('.container');
mainGrid.style.cssText = `height: ${gridSize}px; 
    width: ${gridSize}px;
    display: grid;
    grid-template: repeat(${numberOfSideSquares}, ${squareSize}px) / repeat(${numberOfSideSquares}, ${squareSize}px);
    border: black solid 2px;
    `;

let gridArray = [];

for (let i = 0; i < (numberOfSideSquares ** 2); i++) {
    gridArray[i] = document.createElement('div');
    gridArray[i].cssText = `height: ${squareSize - (gridItemBorderSize * 2)};
        width: ${squareSize - (gridItemBorderSize * 2)};
        `;
    gridArray[i].classList.add('grid-item');
    mainGrid.appendChild(gridArray[i]);
}
