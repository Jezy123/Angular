$(document).ready(function(){
    $("#grande").css("background-color","blue");
    $("#pequeno").css("position","absolute");
    $('#pequeno').css("background-color","red");
    $("#grande").css("height","500px");
    $("#grande").css("width","500px");
    $("#pequeno").css("height","100px");
    $("#pequeno").css("width","100px");





    $('#animate').on('click',function animacion(){

        var positionInicial=$('#pequeno').position();

        if(positionInicial.top==8 && positionInicial.left!=408){
            distancia= (408 - positionInicial.left)/400;
        }else if(positionInicial.left==408 && positionInicial.top!=408){
            distancia= (408 - positionInicial.top)/400;
        }else if(positionInicial.top==408 && positionInicial.left!=8){
            distancia= (positionInicial.left-8)/400;
        }else if(positionInicial.left==8 && positionInicial.top!=8){
            distancia= (positionInicial.top-8)/400;
        }
    
        
        var time=2000*distancia
        var timeout = setTimeout(animacion, 2050*distancia);
        
      
            if(positionInicial.top==8 && positionInicial.left!=408){
               
                $('#pequeno').animate({
                    left: 408
                },time)
                timeout
                
            
            
            }else if(positionInicial.left==408 && positionInicial.top!=408){
             
                $('#pequeno').animate({
                    top: 408
                },time)
                timeout
                
            
            }else if(positionInicial.top==408 && positionInicial.left!=8){
             
                $('#pequeno').animate({
                    left: 8
                },time)
                timeout
                
            
            }else if(positionInicial.left==8 && positionInicial.top!=8){
    
                $('#pequeno').animate({
                    top:  8                  
                },time)
                timeout
                
                
            }
            $('#para').on('click',function(){
              
                $('#pequeno').clearQueue();
                clearTimeout(timeout);
                $('#pequeno').stop(true,false)
            })
              
        
    })

  


 
})
    