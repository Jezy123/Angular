jQuery.fn.cambiaColor = function() {
    this.each(function(){
       elem = $(this);
       elem.css("background-color","yellow")
    });   
    return this;
 };
 
 