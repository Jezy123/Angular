$(document).ready(function(){
$("#boton").click(function () {

    $('p').changeColor({
        color: 'blue',
        fontFamily: 'sans-serif'
        //fontFamily no se aplica ya que no es un parametro configurable del plugin
    });
});
})
