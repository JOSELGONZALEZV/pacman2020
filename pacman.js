/*hacer que js muestre el escenario completo*/


var mundo = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2], /*dos es bloque*/
    [2,0,2,1,1,1,1,1,1,1,1,1,1,1,2,0,0,2,1,1,1,1,1,2,3,2],
    [2,1,2,1,2,2,2,2,1,2,1,2,2,1,2,0,0,2,1,2,1,2,1,2,1,2], /* uno es moneda*/
    [2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,0,0,2,1,2,1,2,1,2,1,2],
    [2,1,2,2,2,2,1,2,1,1,1,2,2,1,2,0,0,2,1,2,1,2,1,2,1,2],
    [2,1,1,2,3,2,1,2,2,2,1,3,2,1,2,2,2,2,1,2,1,2,1,2,1,2],
    [2,1,1,2,1,2,1,1,1,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,2,2,2,1,2,1,1,2,1,2,2,2,2,1,2,2,1,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,2,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,1,2,2,0,2,2,1,2,1,2,0,0,2,1,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,2,0,4,0,2,1,2,1,2,0,0,2,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,1,2,2,2,2,2,1,2,1,2,0,0,2,1,2,2,1,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,2,1,1,1,1,1,1,3,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 1,
    y: 1
};
var fantasmar = {
    x: 8,
    y: 11
}
var fantasmaa = {
    x: 10,
    y: 11
}
var marcador = 0;

function DisplayWorld(){
    var salida = "";

    for( var i=0; i<mundo.length; i++) {
        salida += '\n<div class="row">\n';
       
        for (var j=0; j<mundo[i].length; j++){
            if( mundo [i][j] == 2){
                salida += '<div class="bloque"></div>';
            }
            else if (mundo [i][j] == 1){
                salida += '<div class="moneda"></div>';
            }
            if (mundo [i][j] == 0){
                salida  += '<div class="vacio"></div>';
            }
            if (mundo [i][j] == 3){
                salida  += '<div class="cereza"></div>';
            }
            if (mundo [i][j] == 4){
                salida  += '<div class="manzana"></div>';
            }
        }
        salida += '\n</div>';
      }  
        document.getElementById("etapa").innerHTML = salida;
      
}
function DisplayPacman(){
    document.getElementById("pacman").style.top = (pacman.y*20) +"px";
    document.getElementById("pacman").style.left = (pacman.x*20) +"px";
    
}
/*function Displayfantasmar(){
    document.getElementById("fantasmar").style.top = (fantasmar.y*20) + "px";
    document.getElementById("fantasmar").style.left = (fantasmar.x*20) +"px";
}
function Displayfantasmaa(){
    document.getElementById("fantasmaa").style.top = (fantasmaa.y*20) + "px";
    document.getElementById("fantasmaa").style.left = (fantasmaa.x*20) +"px";
}*/
function DisplayTablero(){
document.getElementById("tablero").innerHTML = "Puntaje:  " + marcador;
}
DisplayWorld();
DisplayPacman();
DisplayTablero();
/*Displayfantasmar();
Displayfantasmaa();*/


document.onkeydown = function (m){
if(m.keyCode == 37 && mundo [pacman.y][pacman.x-1] != 2){
    pacman.x--;
    document.getElementById("pacman").style.transform = "rotateY(180deg)";
    
}
else if(m.keyCode == 39 && mundo [pacman.y][pacman.x+1] != 2){
    pacman.x++;
    document.getElementById("pacman").style.transform = "rotate(0deg)";
}
else if(m.keyCode == 38 && mundo [pacman.y-1][pacman.x] != 2){
    pacman.y--;
    document.getElementById("pacman").style.transform = "rotate(270deg)";
}
else if(m.keyCode == 40 && mundo [pacman.y+1][pacman.x] != 2 ){
    pacman.y++;
    document.getElementById("pacman").style.transform = "rotate(90deg)";
}
if(mundo[pacman.y] [pacman.x] == 3){
    mundo [pacman.y][pacman.x] = 0;
    marcador += 50;
    DisplayWorld();
    DisplayTablero();
}
if(mundo[pacman.y] [pacman.x] == 1){
    mundo [pacman.y][pacman.x] = 0;
    marcador += 10;
    DisplayWorld();
    DisplayTablero();
}
if(mundo[pacman.y] [pacman.x] == 4){
    mundo [pacman.y][pacman.x] = 0;
    marcador += 100;
    DisplayWorld();
    DisplayTablero();
}
/*if(mundo[pacman.y] = 6 && mundo[pacman.x] = 27){
    mundo [pacman.y] = 6;
    mundo [pacman.x] = 0;
}*/


DisplayPacman();

}


