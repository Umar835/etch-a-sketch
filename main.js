const gridSize = 16
const resetButton = document.querySelector('button')
const container = document.querySelector('.container')

function createGrid(gridSize){
  const changeGridSize = document.createElement('div')
  changeGridSize.classList.add('changeGridSize')

    //creates grid rows
    for(let i = 0; i < gridSize; i++){
      const row = document.createElement('div')
      row.classList.add('grid-row')
      
    //creates the number of grid boxes
      for(let j = 0; j < gridSize; j++){
        const hAndw = 960 / gridSize
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        gridBox.style.height = `${hAndw}px`
        gridBox.style.width = `${hAndw}px`
        // changing background color on grid.
        gridBox.addEventListener('mouseenter', () =>{
         gridBox.style.backgroundColor = 'black'  
        })
        row.appendChild(gridBox)
      }
      changeGridSize.appendChild(row)
    }
    container.appendChild(changeGridSize)
}
//Resets the etch a sketch
resetButton.addEventListener('click', () => {
    let userNewSize = Number(prompt(`Choose size for new grid.`));
    
    if (userNewSize > 100){
      userNewSize = Number(prompt('Please make sure size is 100 or less.'))
    }
   const changeGridSize = document.querySelector('.changeGridSize')

   if(!changeGridSize){
    createGrid(userNewSize)
   }else{
    changeGridSize.remove()
    createGrid(userNewSize)
   } 
})
createGrid(gridSize)


