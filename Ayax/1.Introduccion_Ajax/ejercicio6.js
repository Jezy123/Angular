window.onload=function(){

    document.getElementById('boton').addEventListener("click",sacardatos)
}
var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(){
    if(XMLHttpRequestObject) {
        var objeto=document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "php.php");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                valorRecuperado=XMLHttpRequestObject.responseText;
                objeto.innerHTML = valorRecuperado

            }
        }   

        XMLHttpRequestObject.send(null);
    }
}