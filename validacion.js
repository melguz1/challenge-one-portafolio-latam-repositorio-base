//Haz tú validación en javascript acá

var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');
var mensaje= document.getElementById('mensagem')
var error = document.getElementById('error');

var formulario = document.getElementById('form');
formulario.addEventListener("submit" , function(event){
    event.preventDefault();
    var mensajeDeError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajeDeError.push("Ingrese su nombre");
    
    }
    else if(email.value === null || email.value === ''){
        mensajeDeError.push("Ingrese su correo electronico");
    }

     else if(asunto.value === null || asunto.value === ''){
        mensajeDeError.push("Ingrese un asunto");
    }

    else if(mensaje.value === null || mensaje.value === ''){
        mensajeDeError.push("Ingrese su comentario");
    } else{
        Swal.fire(
            'Su mensaje a sido enviado',
            'Gracias por contacatarnos',
            'success'
          )
    
        }
    
    error.innerHTML = mensajeDeError.join(" - ");

    

    form.reset();
})




