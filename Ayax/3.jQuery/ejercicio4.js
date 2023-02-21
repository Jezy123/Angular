$(document).ready(function(){
    $('#cajita').on("click",function(){

        if($('#cajita').is(':checked')){
          var resultado=  Number($('#numero1').val())+Number($('#numero2').val());

          $('#texto').append("<input type='number' id='resultado' value='"+resultado+"'</p>")
        }else{
            $("#resultado").remove();
        }
    })
})