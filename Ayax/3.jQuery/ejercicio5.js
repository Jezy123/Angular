$(document).ready(function(){

    $("p").on("mouseover",function(){
        $(this).addClass("grande")
   
    })
    $("p").on("mouseout",function(){
        $(this).removeClass("grande")

    })
})