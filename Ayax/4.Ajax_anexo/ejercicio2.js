$(document).ready(function(){

    $("#boton").on("click",function(){
        
        $("#contenido").load("ejemplo.html",function(){
            alert("Cargado")
        })
     
    })
})

