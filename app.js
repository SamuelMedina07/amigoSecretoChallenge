// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
const amigo = document.getElementById('amigo').value;

if(amigo == ""){
    alert('Error! Debe agregar un amigo');
}
else {
    listadoAmigos(amigo.toUpperCase());  
    activarBoton('botonSortear');
    limpiar('amigo');
}

}

const amigos = [];

function listadoAmigos(nuevo_amigo){    
    amigos.push(nuevo_amigo);
    crearElemento("li", nuevo_amigo,"listaAmigos");
}

function sortear(){
    let ganador = Math.floor(Math.random()*amigos.length);
    crearElemento("li", amigos[ganador],'resultado');
    desactivarBoton('botonAnadir');
    desactivarBoton('botonSortear');
    limpiar('name-list');
   
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
    const container = document.getElementById('listaAmigos');
    container.classList.remove(id);
}

function activarBoton(id) {
    document.getElementById(id).disabled = false;
}

function desactivarBoton(id) {
    document.getElementById(id).disabled = true;
}


