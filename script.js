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

//Function to build grid
function buildGrid(size){
    cdiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    cdiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 1; i <= (size * size); i++){
        const div = document.createElement('div');
        div.style.cssText = "border: 1px solid black; background-color: white;";
        div.onmouseenter = function(){
            let currentColor = div.style.backgroundColor;
            //Use filter start with brightness 100% for everything and remove 10% each time
            let shadeValue = 100;
            if(rainbow.checked){
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
                shadeValue = 100;
                
            }else if(shading.checked){
                shadeValue -= 10;
                div.style.cssText = `border: 1px solid black; background-color: ${currentColor}; filter: brightness(${shadeValue}%)`;
                
                
                
            
            }else{
                div.style.backgroundColor = colorPicker.value;
                shadeValue = 100;
            }
           
            
        };
        cdiv.appendChild(div);
    }
}


buildGrid(size);

