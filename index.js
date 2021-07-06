const container = document.querySelector('#container');

function changeGrid() {
    const gridLayout = prompt("Enter new size");

    for (let i = 0; i < gridLayout * gridLayout; i++) {
        const content = document.createElement('div');
        content.classList.add('gridContent');
        content.textContent = i;
        container.appendChild(content);
    }    
}

const sizeChanger = document.querySelector("#sizeChanger");

sizeChanger.addEventListener('click', changeGrid);
