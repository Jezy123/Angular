$(document).ready(function(){

    $("#boton").on("click",function(){
        
        $.post("ejercicio4.php",{name: $("#nombre").val()},function(data){
            $("#contenido").html(data)
        })
     
    })
})

