const cdiv = document.getElementById('container');
const slider = document.getElementById('sizeSlider');
const currentSize = document.getElementById('currentSize');

let size = 16; 
currentSize.innerHTML = "Current Size: " + size + " x " + size

slider.oninput = function(){
    cdiv.innerHTML = '';
    size = "";
    size = this.value;
    buildGrid(size);
    currentSize.innerHTML = "Current Size: " + size + " x " + size
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

buildGrid(size);

