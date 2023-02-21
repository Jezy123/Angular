$(document).ready(function(){

    $("#boton").on("click",function(){
        
        $.get("ejemplo.xml",function(data){
            $(data).find("player").each(function () {
                $("#contenido").append('<div class="football_player"><div class="name">Jugador ' + $(this).find("name").text() + '</div><div class="club">Club ' + $(this).find("club").text() + '</div><div class="number">Numero ' + $(this).find("number").text() + '</div><div class="country">Pais ' + $(this).find("country").text() + '</div></div> ---------<br>');
            })
        })
     
    })
})

