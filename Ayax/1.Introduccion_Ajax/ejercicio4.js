window.onload=function(){

    document.getElementById('boton').addEventListener("click",function(){
        sacardatos("xml.xml","contenedor")
    })
}
var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(datos, idDiv){
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById(idDiv);
        var objetoxml;
        var text="";
        XMLHttpRequestObject.open("GET", datos);
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                objetoxml = XMLHttpRequestObject.responseXML;
                var x = objetoxml.getElementsByTagName("CD");
                for (var i=0; i< x.length;i++){
                    text=text+"CD <br>    Artista:"+x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue+" <br>    Titulo:" +x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +"\n    Pais"+x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue + "<br>" ;
                }
                objeto.innerHTML=text;

            }
        }   

        XMLHttpRequestObject.send(null);
    }
}
