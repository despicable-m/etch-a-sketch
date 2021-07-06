const container = document.querySelector('#container');

for (let i = 0; i < 16 * 16; i++) {
    const content = document.createElement('div');
    content.classList.add('gridContent');
    content.textContent = i;
    container.appendChild(content);
}