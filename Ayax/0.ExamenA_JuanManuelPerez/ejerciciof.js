window.onload= async function(){

    var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}


    if(XMLHttpRequestObject) {
        var objeto = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "pagina.html");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                objeto.innerHTML = XMLHttpRequestObject.responseText;
            }
        }   

        XMLHttpRequestObject.send(null);
    }
    
    setTimeout(function(){
        $("#imagen").mouseover(async function(){
            $("#imagen").fadeOut('slow')
       
           })
       
           $("#imagen").mouseout(async function(){
               $("#imagen").fadeIn('slow')
           });

           $("#boton").click(async function(){
            $("#p").cambiaColor()
        });
    },100)

   
    

}
