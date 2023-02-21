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

        var nombreUsuario=document.getElementById('nombre').value;
        var correoUsuario =document.getElementById('correo').value;
        var misdatosC="correo="+correoUsuario;
        var misdatosU="usuario="+nombreUsuario;
        var misdatos= misdatosC+"&"+misdatosU;

        XMLHttpRequestObject.open("POST", 'phpE1.php');
        XMLHttpRequestObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        alert(misdatos);
        XMLHttpRequestObject.send(misdatos);

        
    }
}