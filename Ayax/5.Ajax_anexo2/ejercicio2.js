$(document).ready(function(){

    $("#boton").on("click",async function(){
        setTimeout(function(){
            $("#dynamic").remove()
            $.ajax({
                type: "GET",
                url: "hora.php",
                dataType: "text",
                success: function(result){
                    $("#contenido").html(result);
                },
                error: function(){
                    alert()
                }
            })
        },2000)
     
    })

    $("#boton").on("click", async function(){
        var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
        img.attr('src', "giphy.gif");
        img.appendTo('#contenido');
    })

})

