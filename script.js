const container = document.querySelector('#container');

function createGrid(gridNumber){
    let gridArea = gridNumber * gridNumber;
    for ( let i=1; i <= gridArea; i++){
        let gridBox = document.createElement('div'); 
        gridBox.classList.add('box');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridBox);
    }
}

createGrid(20);


const smallButton = document.getElementById('small');
const mediumButton = document.getElementById('medium');
const largeButton = document.getElementById('large');

smallButton.addEventListener('click' ,() => {
    removeGrid();
    createGrid(30);
    
}); 

mediumButton.addEventListener('click' ,() => {
    removeGrid();
    createGrid(20);
    
}); 

largeButton.addEventListener('click' ,() => {
    removeGrid();
    createGrid(10);
   
}); 


function removeGrid() {
    const gridBox = document.querySelectorAll('#container div');
    gridBox.forEach((gridBox) => gridBox.remove());
}

//change curser color
function draw(color){
const gridBox = document.querySelectorAll('.box');
gridBox.forEach( (gridBox) => {
    gridBox.addEventListener('mouseover', () => {
        if( color == 'black'){
            gridBox.style.backgroundColor = 'black';
        }else if(color == 'eraser'){
            gridBox.style.backgroundColor = 'white';
        }else if(color == 'rainbow'){
            gridBox.style.backgroundColor = getRandomColor();
            
        }
    })
});
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


const blackButton = document.getElementById('black');
const eraserButton = document.getElementById('eraser');
const rainbowButton = document.getElementById('rainbow');


blackButton.addEventListener('click', () => draw('black'));
eraserButton.addEventListener('click', () => draw('eraser'));
rainbowButton.addEventListener('click', () => draw('rainbow'));



//reset button
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    const resetColor = document.querySelectorAll('.box');
    resetColor.forEach((box) => {
        box.style.backgroundColor = 'white';
    })
})





