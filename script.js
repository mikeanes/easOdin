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

//Color Picker
const colorPicker = document.getElementById('pixelColor');
    //Rainbow option
    const rainbow = document.getElementById('rainbow');
    //Shading option
    const shading = document.getElementById('shading');
    //Lighten option
    const lighten = document.getElementById('lighten');

//Function to build grid
function buildGrid(size){
    cdiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    cdiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 1; i <= (size * size); i++){
        const div = document.createElement('div');
        div.style.cssText = "border: 1px solid black; background-color: white;";
        let shadeValue = 100;
        div.onmouseenter = function(){
            let currentColor = div.style.backgroundColor;
            if(rainbow.checked){
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                shadeValue = 100;
                div.style.cssText = `border: 1px solid black; background-color: rgb(${r}, ${g}, ${b}); filter: brightness(${shadeValue}%)`;
            }else if(shading.checked){
                shadeValue -= 10;
                div.style.cssText = `border: 1px solid black; background-color: ${currentColor}; filter: brightness(${shadeValue}%)`;
            }else if(lighten.checked){
                shadeValue += 100;
                div.style.cssText = `border: 1px solid black; background-color: ${currentColor}; filter: brightness(${shadeValue}%)`;
            }else{
                shadeValue = 100;
                div.style.cssText = `border: 1px solid black; background-color: ${colorPicker.value}; filter: brightness(${shadeValue}%)`;
            }
        };
        cdiv.appendChild(div);
    }
}

//Event listeners to ensure rainbow and shading cannot be toggled simultaneously
rainbow.addEventListener("click", function(){
    if(shading.checked && rainbow.checked){
    shading.checked = false;
    }
});
shading.addEventListener("click", function(){
    if(rainbow.checked && shading.checked){
        rainbow.checked = false;
        }
});

buildGrid(size);

