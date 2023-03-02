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
