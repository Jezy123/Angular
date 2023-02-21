$(document).ready(function(){

    $("#boton").on("click",function(){
        var str = $( "form" ).serialize();
        alert(str)
        $.post("ejercicio4.php",str,function(data){
            $("#contenido").html(data)
        })
     
    })
})

