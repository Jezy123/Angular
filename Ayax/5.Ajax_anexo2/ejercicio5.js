$(document).ready(function(){
    $("#boton").on("click",function(){
        $.getJSON("https://reqres.in/api/users?page=2",function(data){
          
        })

        .done(function(data, statusText, xhr){
            var status = xhr.status; 
            alert(status)
            for(var i=0;i<data.data.length;i++){
                $('#contenido').append('<p> ID: '+data.data[i].id+' - Emial: '+data.data[i].email+' - Nombre: '+ data.data[i].first_name+' - Apellido: '+ data.data[i].last_name+'</p>')
            }
        })
       
     

    })
})

