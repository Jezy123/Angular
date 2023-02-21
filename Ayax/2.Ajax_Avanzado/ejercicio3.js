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
        objeto=document.getElementById("contenedor");

        var misdatos="envioEmail=juanma"
        XMLHttpRequestObject.open("POST", 'php2.php');
        XMLHttpRequestObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        XMLHttpRequestObject.setRequestHeader("Content-length", misdatos.length);
        XMLHttpRequestObject.setRequestHeader("Connection", "close");
        XMLHttpRequestObject.send(misdatos)
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                valorRecuperado=XMLHttpRequestObject.responseText;
            
                objeto.innerHTML = valorRecuperado

            }
        }
    }
}