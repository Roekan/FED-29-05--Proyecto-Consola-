window.addEventListener("load", cargar)
let fondo=false;

function cargar (){
    
document.getElementById("button-on").addEventListener("click", mostrarOcultarImagen);
document.getElementById("plus-vertical").addEventListener("mouseover", hoverPlus);
document.getElementById("plus-horizontal").addEventListener("mouseover", hoverPlus);
document.getElementById("plus-vertical").addEventListener("mouseout", outPlus);
document.getElementById("plus-horizontal").addEventListener("mouseout", outPlus);
}





function mostrarOcultarImagen(){
    if(!fondo){
        document.getElementById("glass").style="background: url(../images/fondo.jpg)";
        fondo= !fondo;
        
    }else{
        document.getElementById("glass").style="background:#282a2e;";
        fondo= !fondo;
    }
    //console.log("fondo: " + fondo);
}

function hoverPlus(){
    document.getElementById("plus-vertical").style="box-shadow: none;";
    document.getElementById("plus-horizontal").style="box-shadow: none;";
    document.getElementById("plus-vertical-shadow").style="box-shadow: none;";
}

function outPlus(){
    document.getElementById("plus-vertical").style="box-shadow: none;";
    document.getElementById("plus-horizontal").style="box-shadow: 0.1rem 0.2rem 0.1rem 0.1rem rgba(0, 0, 0, 0.4);";
    document.getElementById("plus-vertical-shadow").style="box-shadow: 0.1rem 0.2rem 0.1rem 0.1rem rgba(0, 0, 0, 0.4);";
}