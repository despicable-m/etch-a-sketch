const container = document.querySelector('#container');

// Creates a 16 x 16 grild
createGrid(16);

const gridContent = document.querySelectorAll('.gridContent');


// Changes grid to user's input
function changeGrid() {
    let gridLayout = prompt("Enter new size (1-100)");

    // let removeElements = (elms) => elms.forEach(el => el.parentNode.removeChild(el));
    
    if (gridLayout >= 1 && gridLayout <= 100) {
        removeElements(gridContent);
        createGrid(gridLayout);
    }
    else {
        while (gridLayout > 100 || gridLayout < 1) {
            gridLayout = prompt("Enter new size (1-100)");
        }
        removeElements(gridContent);
        createGrid(gridLayout);       
    }
}

// Changes background color to a random color when user hovers over the square. 
function changeColor(e) {
    let colorR = Math.floor(Math.random() * 255);
    let colorG = Math.floor(Math.random() * 255);
    let colorB = Math.floor(Math.random() * 255);
    let gridToChange = document.querySelector(`[data-id="${e.srcElement.id}"]`);
    gridToChange.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}

// Removes existing grids
function removeElements() {
    const grids = Array.from(container.childNodes);
    grids.forEach((e) => {
        container.removeChild(e);
    });
}

// Creates grid using value
function createGrid(value) {
    for (let i = 0; i < value * value; i++) {
        const content = document.createElement('div');
        content.classList.add('gridContent');
        content.style.border = '1px solid black';
        content.id = i;
        content.dataset.id = i;
        content.addEventListener('mouseover', changeColor);
        container.appendChild(content);
    }
    
    // Grids the containers elements
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.border = '1px solid black';
    container.style.width = 'min-content';
    container.style.height = 'min-content';
}

// Button for changing grid size (layout)
const sizeChanger = document.querySelector("#sizeChanger");
sizeChanger.addEventListener('click', changeGrid);


