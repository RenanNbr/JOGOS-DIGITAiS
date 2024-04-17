var direcaoX;
var direcaoY;
var positionX;
var positionY;
var obj;
var temp;
var velocit;

function iniciar(){
    direcaoX = 0;
    direcaoY = 0;
    positionX = 41;
    positionY = 41;
    obj = document.getElementById("dv1");
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
    temp =  setInterval(updateFrame, 20);
    velocit = 2;
}
function teclaDw(){
    var tecla = event.keyCode;
    if(tecla === 65){
        direcaoX = -1;
    } else if(tecla === 87){
        direcaoY = -1;
    } else if (tecla === 68){
        direcaoX = 1;
    } else if(tecla === 83){
        direcaoY = 1;
    }
}
function teclaUp(){
    var tecla = event.keyCode;
    if(tecla === 65){
        direcaoX = 0;
    }else if(tecla === 87){
        direcaoY = 0;
    }else if(tecla === 68){
        direcaoX = 0;
    }else if(tecla === 83){
        direcaoY  = 0;
    }
}
function updateFrame(){
    positionX += direcaoX * velocit;
    positionY += direcaoY * velocit;
    obj.style.left = positionX + "px";
    obj.style.top = positionY + "px";
}
window.addEventListener("load", iniciar)
