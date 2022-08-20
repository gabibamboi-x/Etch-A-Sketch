const container = document.getElementById('mainDiv');

let q = 3

for (let i = 0; i < q; i++) {
    let y = document.createElement('div');
    y.setAttribute('class', 'parentDiv')
    container.appendChild(y)
}

window.addEventListener('DOMContentLoaded', () => {
    for (let j = 0; j < q; j++) {
        const row = document.querySelectorAll('.parentDiv')
        row.forEach(el => {
            let x = document.createElement('div');
            x.setAttribute('id', 'column')
            el.appendChild(x)})
}});

window.addEventListener('DOMContentLoaded', () => {
    const sq = document.querySelectorAll('#column')

    sq.forEach(el => el.addEventListener('mouseover', () => {
        el.style.backgroundColor = 'black'}))
})


