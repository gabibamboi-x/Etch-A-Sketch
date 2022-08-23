
// create a 'background' div, this way the sketchbook
// and the buttons will all be in a box
const backdiv = document.getElementById('backgroundDiv');
const container = document.createElement('div');
const buttonsDiv = document.createElement('div');

container.setAttribute('id', 'mainDiv');
buttonsDiv.setAttribute('id', 'buttonsDiv');

backdiv.appendChild(container);
backdiv.appendChild(buttonsDiv);

// initial grid creation
let grid = 20;
createGrid();


// adding the buttons
for (let i = 0; i < 5; i++) {
    let j = document.createElement('button');
    j.textContent = 'button' + i;
    j.setAttribute('id', ('button' + i));
    buttonsDiv.appendChild(j);
}

const gridLayout = document.getElementById('button0');

gridLayout.addEventListener('click', () => {
    grid = prompt('Layout: ');
    if (grid > 100) {
        grid = 100;
    }
    container.innerHTML = ''
    createGrid();
});


function createGrid() {
    // create a row of divs
    for (let i = 0; i < grid; i++) {
        let y = document.createElement('div');
        y.setAttribute('class', 'parentDiv');
        container.appendChild(y);   
        }
        
        // add the same amount of divs to every item in the row,
        // with css, change their direction and get a grid
        // with the same number of rows and columns
        for (let j = 0; j < grid; j++) {
            const row = document.querySelectorAll('.parentDiv');
            row.forEach(el => {
                let x = document.createElement('div');
                x.setAttribute('id', 'column');
                // add event listener for each square
                x.addEventListener('mouseover', () => {
                    x.style.backgroundColor = 'black';
                })
                el.appendChild(x);
})}};