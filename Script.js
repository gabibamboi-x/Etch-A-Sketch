
// create a 'background' div, this way the sketchbook
// and the buttons will all be in a box
const backdiv = document.getElementById('backgroundDiv');
const container = document.createElement('div');
const buttonsDiv = document.createElement('div');

container.setAttribute('id', 'mainDiv');
buttonsDiv.setAttribute('id', 'buttonsDiv');

backdiv.appendChild(container);
backdiv.appendChild(buttonsDiv);

// create the default grid
let grid = 20;
let color = 'black';
createGrid();



// add the buttons
for (let i = 0; i < 5; i++) {
    let j = document.createElement('button');
    j.textContent = 'button' + i;
    j.setAttribute('id', ('button' + i));
    buttonsDiv.appendChild(j);
}


// custom grid
const gridLayout = document.getElementById('button0');
gridLayout.textContent = 'New Grid';
gridLayout.addEventListener('click', () => {
    grid = prompt('Layout: ');
    if (grid > 100) {
        // set the grid to 100 if the user does not cooperate
        grid = 100;
    }
    // set the default color
    color = 'black'
    // empty the div and fill it again with the amount given
    container.innerHTML = ''
    createGrid();
});


// set color to black(default)
const defaultBlack = document.getElementById('button1');
defaultBlack.textContent = 'Black';
defaultBlack.addEventListener('click', () => {
    // reseting the color to black if the user was on rgb or greyscale
    color = 'black';
    container.innerHTML = ''
    createGrid();
});


// set color to greyscale
const greyScale = document.getElementById('button2');
greyScale.textContent = 'Greyscale';
greyScale.addEventListener('click', () => {
    container.innerHTML = ''
    createGrid();
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
                    x.style.backgroundColor = color;
                });
                el.appendChild(x);
})}};