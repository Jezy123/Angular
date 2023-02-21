window.onload=function(){

    document.getElementById('boton').addEventListener("click",function(){
        sacardatos(fotos[click],"img")
    })
}
var fotos=["foto.txt","foto2.txt"]
var click=0;
var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(datos, idDiv){
if(XMLHttpRequestObject) {
    var objeto = document.getElementById(idDiv);
    XMLHttpRequestObject.open("GET", datos);
    XMLHttpRequestObject.onreadystatechange = function(){
if (XMLHttpRequestObject.readyState == 4 &&
XMLHttpRequestObject.status == 200) {
    objeto.src = XMLHttpRequestObject.responseText;
    if (click==1){
        click--;
    }else{
        click++;
    }

}
}
XMLHttpRequestObject.send(null);
}
}
