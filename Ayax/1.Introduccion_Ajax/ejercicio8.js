window.onload=function(){

    document.getElementById('boton').addEventListener("click",sacardatos)
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
        XMLHttpRequestObject.open("GET", "datos.json");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                valorRecuperado=JSON.parse(XMLHttpRequestObject.responseText);
                    objeto.innerHTML = valorRecuperado.squadName+" "+valorRecuperado.homeTown;


            }
        }   

        XMLHttpRequestObject.send(null);
    }
}