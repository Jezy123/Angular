$(document).ready(function(){

    $('input[name="color"]').on("click", function(){
        $("p").css("background-color",$('input[name="color"]:checked').val())
    })
})