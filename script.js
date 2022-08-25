
// create a 'background' div, this way the sketchbook
// and the buttons will all be in a box
const backdiv = document.getElementById('backgroundDiv');
const container = document.createElement('div');
const buttonsDiv = document.createElement('div');
const gridToggle = document.createElement('button');

container.setAttribute('id', 'mainDiv');
buttonsDiv.setAttribute('id', 'buttonsDiv');
gridToggle.setAttribute('id', 'gridToggle');

backdiv.appendChild(gridToggle);
backdiv.appendChild(container);
backdiv.appendChild(buttonsDiv);

// create the default grid
let grid = 20;
let color = 'black';
createGrid();

// seting the grid state to inactive, we start without a grid
// if the user wants a grid he can toggle it by clicking the button
let gridState = 'inactive';
gridToggle.style.backgroundColor = 'crimson'
gridToggle.textContent = 'Grid'
gridToggle.addEventListener('click', () => {
    // if the state is inactive the a class containing the grid in css will be added on click
    if (gridState === 'inactive') {
        document.querySelectorAll('#column').forEach(el => { el.classList.add('active')});
        gridState = 'active';
        // changing the color to green, shows that the grid is active
        gridToggle.style.backgroundColor = '#009E60'
        // else if the status is active the class will be removed and the color will be reset
    } else { document.querySelectorAll('#column').forEach(el => { el.classList.remove('active')});
        gridState = 'inactive';
        gridToggle.style.backgroundColor = 'crimson';
}});


// add the buttons
for (let i = 0; i < 5; i++) {
    let j = document.createElement('button');
    j.textContent = 'button' + i;
    j.setAttribute('id', ('button' + i));
    j.setAttribute('class', 'btn')
    buttonsDiv.appendChild(j);
}


const allButtons = document.querySelectorAll('.btn');
// set color to black(default)
const defaultBlack = document.getElementById('button1');
defaultBlack.textContent = 'Black';
defaultBlack.addEventListener('click', () => {
    // reseting the color to black if the user was on rgb or greyscale
    color = 'black';
    container.innerHTML = ''
    createGrid();
    checkGridState();

    // reset background for other buttons and set the current one 
    // to a different color (shows active selection)
    allButtons.forEach(button => {button.style.backgroundColor = 'crimson'});
    defaultBlack.style.backgroundColor = '#009E60';
});

// custom grid
const gridLayout = document.getElementById('button0');
gridLayout.textContent = 'New Grid';
gridLayout.addEventListener('click', () => {
    grid = prompt('Layout: ');
    if (grid > 100) {
        // set the grid to 100 if the user does not cooperate
        grid = 100;
    } else if(!grid) {
        grid = 20;
    }
    // set the default color
    color = 'black'
    // empty the div and fill it again with the amount given
    container.innerHTML = ''
    createGrid();
    checkGridState();

    allButtons.forEach(button => {button.style.backgroundColor = 'crimson'});
    defaultBlack.style.backgroundColor = '#009E60';
});


// set color to greyscale
const greyScale = document.getElementById('button2');
greyScale.textContent = 'Greyscale';
greyScale.addEventListener('click', () => {
    container.innerHTML = ''
    createGrid();
    checkGridState();

    allButtons.forEach(button => {button.style.backgroundColor = 'crimson'});
    greyScale.style.backgroundColor = '#009E60';

    // get all squares
    let greyscalesquares = document.querySelectorAll('#column');{
    // increase the opacity for each hover
    greyscalesquares.forEach(el => { el.count = 0;
        el.addEventListener ('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
            e.target.count += 1
            e.target.style.opacity = 0.2 * e.target.count;
})})}});


// set color to a random rgb
const rgb = document.getElementById('button3');
rgb.textContent = 'RGB';
rgb.addEventListener('click', () => {
    
    container.innerHTML = ''
    createGrid();
    checkGridState();

    allButtons.forEach(button => {button.style.backgroundColor = 'crimson'});
    rgb.style.backgroundColor = '#009E60';

    let rgbsquares = document.querySelectorAll('#column');
    rgbsquares.forEach(el => {el.addEventListener ('mouseover', () => {
        // get random number between 0 and 255 to replace them in the rgb for a random color
        color = 'rgb(' + Math.floor(Math.random() * 255) + ',' +
        Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
        el.style.backgroundColor = color;
})})});


// reset everything back to default
const reset = document.getElementById('button4');
reset.textContent = 'Reset';
reset.addEventListener('click', () => {
    color = 'black';
    container.innerHTML = '';
    createGrid();
    checkGridState();

    allButtons.forEach(button => {button.style.backgroundColor = 'crimson'});
    defaultBlack.style.backgroundColor = '#009E60';
});



// FUNCTIONS

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
                    x.style.backgroundColor = color;
                });
                el.appendChild(x);
})}};


// we need this function to check the current state when one of the other buttons are clicked
// and give the user the same grid state as before pressing the button. However the state is not 
// change as this function only checks the previous state to set the grid/color as before.
function checkGridState() {
    // if the state is inactive the a class containing the grid in css will be added on click
    if (gridState === 'active') {
        document.querySelectorAll('#column').forEach(el => { el.classList.add('active')});
        // changing the color to green, shows that the grid is active
        gridToggle.style.backgroundColor = '#009E60'
        // else if the status is active the class will be removed and the color will be reset
    } else { document.querySelectorAll('#column').forEach(el => { el.classList.remove('active')});
        gridToggle.style.backgroundColor = 'crimson';
}};
