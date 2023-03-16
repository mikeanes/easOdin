const cdiv = document.getElementById('container');

let size; 

function getSize(){
    cdiv.innerHTML = '';
    size = "poopoo";
    while (isNaN(size) || size < 1 || size > 100){
    size = parseInt(prompt("Enter a size for the grid between 1 - 100:"));
    }
    buildGrid(size);
}

function buildGrid(size){
    cdiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    cdiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 1; i <= (size * size); i++){
        const div = document.createElement('div');
        div.style.cssText = "border: 1px solid black;";
        div.onmouseenter = function(){
            div.classList.add('pixel');
        };
        cdiv.appendChild(div);
    }
}

buildGrid(16);

