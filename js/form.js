const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const message = document.querySelector('textarea');
const news = document.getElementById('news');
const newsletter = document.getElementById('newsletter');
const btnNews = document.querySelector('#btn-news');
// const btn = document.getElementById('btn');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,20}$/, 
    asunto: /^[a-zA-Z0-9\s]{4,20}$/,
	comentario: /^[a-zA-ZÀ-ÿ0-9\s]{1,120}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8,14}$/ 
}

const campos = {
    nombre : false,
    asunto : false,
    correo : false,
    telefono : false,
    comentario : false
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, e.target.name);
            break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, e.target.name);
            break;
        case "comentario":
            validarCampo(expresiones.comentario, e.target, e.target.name);
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, e.target.name);
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, e.target.name);
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('incorrect');       
        document.querySelector(`#f-${campo} .error-text`).classList.remove('error');
        campos[campo] = true;       
    } else{
        document.getElementById(`${campo}`).classList.add('incorrect');     
        document.querySelector(`#f-${campo} .error-text`).classList.add('error');  
        campos[campo] = false;     
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

})

message.addEventListener('keyup', validarFormulario);
message.addEventListener('blur', validarFormulario);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(campos.nombre && campos.asunto && campos.correo && campos.telefono && campos.comentario){
        form.reset();
        document.getElementById('exito').classList.add('exito');
        document.getElementById('alert').classList.remove('error2');
        setTimeout(() => {
            document.getElementById('exito').classList.remove('exito');
        }, 2000);
    } else {
        document.getElementById('alert').classList.add('error2');
    }
})

// btn.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     document.getElementById('exito').classList.add('exito');
    //     if(campos.nombre && campos.asunto && campos.correo && campos.telefono && campos.comentario){
        //         form.reset();
        //         document.getElementById('exito').classList.add('exito');
        //     }
        // })
        
        
const validarEmail = (e) => {
    mail = e.target;
    email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.test(mail.value)) {
        news.classList.remove('incorrect');
    } else {
        news.classList.add('incorrect');
    }

    newsletter.addEventListener('submit', (e) => {
        if(email.test(mail.value)){
            newsletter.reset();
            document.querySelector('.news .text').classList.remove('p-one');
            document.querySelector('.news .text-two').classList.add('p-two');
        } 
    })
}

news.addEventListener('keyup', validarEmail);
news.addEventListener('blur', validarEmail);
