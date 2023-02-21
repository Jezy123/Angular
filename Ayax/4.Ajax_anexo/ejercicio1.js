$(document).ready(function(){

    $("#boton").on("click",function(){
        
        $.ajax({
            type: "GET",
            url: "texto.txt",
            dataType: "text",
            success: function(result){
                $("#contenido").html(result);
            }
        })
     
    })
})

