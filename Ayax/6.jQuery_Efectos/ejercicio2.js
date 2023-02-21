$(document).ready(function(){
    $("body").css("background-color","blue");
    $('#h1').css("text-align"," center");
    $("#h1").css("margin-top","45vh")

    

    $('#boton0').on('click',function(){
        $('#h1').animate({
            opacity:0 
        },3000)
    })
    $('#boton1').on('click',function(){
        $('#h1').animate({
            opacity:1
        },3000)
    })
})
    