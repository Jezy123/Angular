$(document).ready(function(){
    $('#boton0').on('click',function(){
        $('#img1').toggle();
    })
    $('#boton1').on('click',function(){
        $('#img1').fadeToggle( "slow", "linear" )
    })
    $('#boton2').on('click',function(){
        $('#img1').slideToggle( "slow")
    })
    $('#boton3').on('click',function(){
        $('#img1').animate({
            opacity:0.2,
            marginLeft: "+=1050px",
           


        },5000)
        $('#img1').animate({
            opacity:1,
            marginLeft: "-=1050px",
           


        },5000)
    })

})
