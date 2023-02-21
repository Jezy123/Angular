$(document).ready(function(){

    $('.inputviaje').on("click", function(){
       
        if($('input[name="viaje"]:checked').val()=="Marruecos"){
            $("#precio").html("<input type='text' value='600' disabled>")

        }else {
            $("#precio").html("<input type='text' value='1000' disabled>")
        }
    })

    $('#cajita').on("click", async function(){
        if($(this).prop('checked')){
            $.ajax({
                type: "GET",
                url: "test.html",

                success: function(result){
                    $("#contenido").html(result);
                    $("#contenido").css({border:"1px solid black"})
                    $("#contenido").animate({ 
                        
                        borderWidth: '20px',
                        fontSize: "25pt" 
                    },500);
                }
            })
        }else{
            $("#contenido").html("");
            $("#contenido").css({border:"0px solid black"});
            $("#contenido").css({fontSize:"16px"});
        }
    })
})