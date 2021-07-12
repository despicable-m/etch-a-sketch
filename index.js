const container = document.querySelector('#container');

for (let i = 0; i < 16 * 16; i++) {
    const content = document.createElement('div');
    content.classList.add('gridContent');
    content.style.border = '1px solid black';
    content.id = i
    content.dataset.id = i
    container.appendChild(content);
}

container.style.display = 'grid';
container.style.gridTemplateColumns = `repeat(${16}, 30px)`;
container.style.gridTemplateRows = `repeat(${16}, 30px)`;
container.style.border = '1px solid black';
container.style.width = 'min-content';
container.style.height = 'min-height';

const gridContent = document.querySelectorAll('.gridContent');
gridContent.forEach(grid => grid.addEventListener('mouseover', changeColor));

function changeGrid() {

    const gridLayout = prompt("Enter new size");
    const removeElements = (elms) => elms.forEach(el => el.remove());
    removeElements(gridContent);

    for (let i = 0; i < gridLayout * gridLayout; i++) {
        const content = document.createElement('div');
        content.classList.add('gridContent');
        content.style.border = '1px solid black';
        container.appendChild(content);
    }
    
    // Grids the containers elements
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${gridLayout}, 30px)`;
    container.style.gridTemplateRows = `repeat(${gridLayout}, 30px)`;
    container.style.border = '1px solid black';
    container.style.width = 'min-content';
    container.style.height = 'min-content';

    // gridContent.forEach(grid => grid.addEventListener('mouseover', changeColor));
}

function changeColor(e) {
    let colorR = Math.floor(Math.random() * 255);
    let colorG = Math.floor(Math.random() * 255);
    let colorB = Math.floor(Math.random() * 255);

    let gridToChange = document.querySelector(`[data-id="${e.srcElement.id}"]`);
    gridToChange.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}

const sizeChanger = document.querySelector("#sizeChanger");

sizeChanger.addEventListener('click', changeGrid);


