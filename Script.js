
// create a 'background' div, this way the title, the sketchbook
// and the buttons will all be in a box
const backdiv = document.getElementById('backgroundDiv');

const container = document.createElement('div');
const title = document.createElement('h1');

container.setAttribute('id', 'mainDiv');
title.setAttribute('id', 'title');
title.textContent = 'Etch A Sketch';

backdiv.appendChild(title)
backdiv.appendChild(container);



let grid = 10;
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
        el.appendChild(x);
})};


// listen for mouseover event on each square and change their color
window.addEventListener('DOMContentLoaded', () => {
    const sq = document.querySelectorAll('#column');
    sq.forEach(el => el.addEventListener('mouseover', () => {
        el.style.backgroundColor = 'black';
}))});