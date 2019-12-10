const multiplier = 64;
const gridSize = multiplier * 10;
let numberOfSideSquares = 16;
let numberOfSquares = numberOfSideSquares ** 2;
let squareSize = gridSize / numberOfSideSquares;
let gridItemBorderSize = 1;
let paintColor = 'black';

const mainGrid = document.querySelector('.container');

let gridArray = [];

createGrid(numberOfSideSquares);

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearAndPrompt);

function clearAndPrompt(e) {
    clearBoard();
    
    do {
        numberOfSideSquares = Number(prompt('How many squares per side would you like? (between 10 and 64)'));
    } while (!numberOfSideSquares || numberOfSideSquares < 10 || numberOfSideSquares > 64);
    
    createGrid(numberOfSideSquares);
}

function clearBoard(){
    for (let i = 0; i < numberOfSquares; i++) {
        mainGrid.removeChild(gridArray[i]);
    }
}

function createGrid(numberOfSideSquares) {

    numberOfSquares = numberOfSideSquares ** 2;
    squareSize = gridSize / numberOfSideSquares;
    paintColor = 'black';
    
    mainGrid.style.cssText = `height: ${gridSize}px; 
        width: ${gridSize}px;
        display: grid;
        grid-template: repeat(${numberOfSideSquares}, ${squareSize}px) / repeat(${numberOfSideSquares}, ${squareSize}px);
        border: black solid 2px;
        `;
    
    for (let i = 0; i < numberOfSquares; i++) {
        gridArray[i] = document.createElement('div');
        gridArray[i].cssText = `height: ${squareSize - (gridItemBorderSize * 2)};
        width: ${squareSize - (gridItemBorderSize * 2)};
        `;
        gridArray[i].classList.add('grid-item');
        gridArray[i].addEventListener('mouseover', paintItem);
        mainGrid.appendChild(gridArray[i]);
    }
}

function paintItem(e) {
    e.target.style.cssText = `background: ${paintColor}`;
}

const randomizeButton = document.querySelector('#randomize-button');
randomizeButton.addEventListener('click', randomizeColor);

function randomizeColor(e) {
    let grArray = [];
    for (let i = 0; i < numberOfSquares; i++) {
        gridArray[i].addEventListener('mouseover', changeColorRandomly);
    }
}

function changeColorRandomly(e) {
    paintColor = getRandomHSLColor();
}

function getRandomHSLColor() {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

