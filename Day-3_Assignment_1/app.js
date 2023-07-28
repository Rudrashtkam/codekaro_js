function getRandomColor(){
    let hexcolor = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
    return hexcolor;
}


function changeBackgroundColor(){
    let randomColorCode = getRandomColor();
    let element = document.getElementById("changeColor");
   element.style.backgroundColor = randomColorCode;
}

document.addEventListener("click", changeBackgroundColor);