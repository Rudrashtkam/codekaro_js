function getRandomColor(){
  let hexcolor = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
    return hexcolor;
}


function changeBackgroundColor(){
    let randomColorCode = getRandomColor();
    var element = document.getElementById("changeColor");
    console.log(element);
    element.style.backgroundColor = randomColorCode;
   
}

document.addEventListener("click", changeBackgroundColor);