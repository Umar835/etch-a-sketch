const gridSize = 16
// const resetButton = document.querySelector('.button')
const container = document.querySelector('.container')

function createGrid(gridSize){
    //creates grid rows
    for(let i = 0; i < gridSize; i++){
      const row = document.createElement('div')
      row.classList.add('grid-row')
      
    //creates the number of grid boxes
      for(let j = 0; j < gridSize; j++){
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        // changing background color on grid.
        gridBox.addEventListener('mouseenter', () =>{
         gridBox.style.backgroundColor ='black'  
        })
        row.appendChild(gridBox)
      }
      container.appendChild(row)
    }
}
createGrid(gridSize)


