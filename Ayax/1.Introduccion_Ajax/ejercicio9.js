window.onload=function(){

    document.getElementById('boton').addEventListener("click",sacardatos)
    document.getElementById('boton').addEventListener("click",cargar)

}
var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

async function sacardatos(){
    if(XMLHttpRequestObject) {
        objeto=document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "datos.txt");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                valorRecuperado=XMLHttpRequestObject.responseText;
                setTimeout(function(){
                    objeto.innerHTML = valorRecuperado
                },5000)

            }
        }   

        XMLHttpRequestObject.send(null);
    }
}

async function cargar(){
    document.getElementById("imagen").src="giphy.gif"
}