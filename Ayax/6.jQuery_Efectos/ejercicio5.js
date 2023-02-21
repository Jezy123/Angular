$(document).ready(function(){
    $("#h1").css("position","absolute");
    $("#color").css("margin","100px");

    $("#color").on("click",function(){

        $("#h1").animate({
            left :"+500"
        },1500)
        
        $("#h1").queue(function(){
            $("#h1").css("background-color", "yellow")
            $("#h1").dequeue()
        })
        
        $("#h1").animate({
            left :"100"
        },1500)

            
        
    })
})