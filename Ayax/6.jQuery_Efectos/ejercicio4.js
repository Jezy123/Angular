$(document).ready(function(){
    $("#color").on("click",function(){
        var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        $('h1').animate({ 
            'color': newColor
        },500);
    })
})