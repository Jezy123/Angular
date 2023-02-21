$(document).ready(function(){
alert('h')
    $("#imagen").mouseover(async function(){
     $("#imagen").fadeOut('slow')

    })

    $("#imagen").mouseout(async function(){
        $("#imagen").fadeIn('slow')
    });

})