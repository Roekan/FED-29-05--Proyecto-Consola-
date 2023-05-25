window.addEventListener("load", cargar)
var fondo=false;

function cargar (){
    
document.getElementById("button-on").addEventListener("click", mostrarOcultarImagen)
}





function mostrarOcultarImagen(){

    if(fondo == false){
        document.getElementById("glass").style="background: url(../images/fondo.jpg)";
        fondo=true;
        
    }else{
        document.getElementById("glass").style="background:#282a2e;";
        fondo=false;
    }



    console.log("fondo: " + fondo);

}