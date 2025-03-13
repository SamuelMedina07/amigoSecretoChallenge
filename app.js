// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
/* const amigo = document.getElementById('amigo').value;

if(amigo == ""){
    alert('Error! Debe agregar un amigo');
}
else { */
    listadoAmigos(amigo.toUpperCase());  
    activarBoton('botonSortear');
    limpiar('amigo');
    console.log(amigos);
}


const amigos = [];

function verificarCampos(boton) {
    switch (boton) {
        case boton=1:
            if (amigos.length = 0) {
                alert('Error! No hay personas para el sorteo');
            }
            break;
            
         case 2:


    alert('Error! Debe agregar un amigo');
   
            break;  


    }
    
   /*  if (amigos.length = 0) {
        alert('Error! No hay personas para el sorteo');
    } else {
        agregarAmigo();
    }    */ 
}

function listadoAmigos(nuevo_amigo){    
    amigos.push(nuevo_amigo);
    crearElemento("li", nuevo_amigo,"listaAmigos");
}

function sortear(){
    let ganador = Math.floor(Math.random()*amigos.length);
    crearElemento("li", amigos[ganador],'resultado');
    desactivarBoton('botonAnadir');
    desactivarBoton('botonSortear');
    limpiar('listaAmigos');
   
}

function crearElemento(etiqueta_hija,nombre_persona,etiqueta_padre) {
    let crearNuevo = document.createElement(etiqueta_hija);
    crearNuevo.innerHTML = nombre_persona;
    agregarElemento(etiqueta_padre,crearNuevo);
}

 function agregarElemento(id,datos){
    let listado = document.getElementById(id);
    listado.appendChild(datos);
    return listado;
}

function limpiar(id) {
   document.getElementById(id).value = "";
   
   const lista = document.getElementById(id);
    while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
}      
}

function activarBoton(id) {
    document.getElementById(id).disabled = false;
}

function desactivarBoton(id) {
    document.getElementById(id).disabled = true;
}

function nuevoJuego() {
    activarBoton('botonAnadir');
    limpiar('resultado');
    limpiar('listaAmigos');
    while (amigos.length > 0) {
        amigos.pop();
    }
    console.log(amigos);
}