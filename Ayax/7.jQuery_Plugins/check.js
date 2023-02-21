$.fn.changeColor = function(options) {
    let config = {
        size: "35px",
        color: 'red',
    }
$.extend(config, options);  

this.css("color", config.color);
this.css("font-size", config.size);
//fontSize se queda tal y como está ya que no se pisa en la nueva configuración

};

//fin plugin..........................................

