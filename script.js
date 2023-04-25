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
        div.style.cssText = "border: 1px solid black; background-color: rgb(255, 255, 255);";
        div.onmouseenter = function(){
            let currentColor = div.style.backgroundColor;
            if(rainbow.checked){
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                div.style.cssText = `border: 1px solid black; background-color: rgb(${r}, ${g}, ${b})`;
            }else if(shading.checked){
                let rgb = currentColor.match(/\d+/g);
                let newR = parseInt(rgb[0]) - 25.5;
			    let newG = parseInt(rgb[1]) - 25.5;
			    let newB = parseInt(rgb[2]) - 25.5;
                newR = Math.max(0, Math.min(255, newR)); 
			    newG = Math.max(0, Math.min(255, newG)); 
			    newB = Math.max(0, Math.min(255, newB));
                div.style.cssText = `border: 1px solid black; background-color: rgb(${newR}, ${newG}, ${newB})`;
            }else if(lighten.checked){
                let rgb = currentColor.match(/\d+/g);
                let newR = parseInt(rgb[0]) + 25.5;
			    let newG = parseInt(rgb[1]) + 25.5;
			    let newB = parseInt(rgb[2]) + 25.5;
                newR = Math.max(0, Math.min(255, newR)); 
			    newG = Math.max(0, Math.min(255, newG)); 
			    newB = Math.max(0, Math.min(255, newB));
                div.style.cssText = `border: 1px solid black; background-color: rgb(${newR}, ${newG}, ${newB})`;
            }else{
                div.style.cssText = `border: 1px solid black; background-color: ${colorPicker.value}`;
            }
        };
        cdiv.appendChild(div);
    }
}

//Event listeners to ensure rainbow, shading and lighten cannot be toggled simultaneously
rainbow.addEventListener("click", function(){
    if(rainbow.checked){
    shading.checked = false;
    lighten.checked = false;
    }
});
shading.addEventListener("click", function(){
    if(shading.checked){
        rainbow.checked = false;
        lighten.checked = false;
        }
});
lighten.addEventListener("click", function(){
    if(lighten.checked){
        rainbow.checked = false;
        shading.checked = false;
    }
});

buildGrid(size);

