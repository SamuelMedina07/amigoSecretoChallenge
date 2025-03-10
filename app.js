// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
const amigo = document.getElementById('amigo').value;

if(amigo == ""){
    alert('Error! Debe agregar un amigo');
}
else {
    listadoAmigos(amigo.toUpperCase());
    document.getElementById("botonSortear").disabled = false;
    document.getElementById('amigo').value = "";
}

}


const amigos = [];

function listadoAmigos(nuevo_amigo){    
    amigos.push(nuevo_amigo);
    crearElemento("li", nuevo_amigo,"listaAmigos");
    /* let listado = document.getElementById('listaAmigos');
    listado.appendChild(crearElemento("li", nuevo_amigo)); */
}

function hola(){
    let ganador = Math.floor(Math.random()*amigos.length);
    console.log(amigos[ganador]);
    console.log(ganador);
    crearElemento("li", amigos[ganador],'resultado');
    /* let listado = document.getElementById('resultado');
    listado.appendChild(crearElemento("li",amigos[ganador])); */
    
}

function crearElemento(etiqueta_hija,nombre_persona,etiqueta_padre) {
    let crearNuevo = document.createElement(etiqueta_hija);
    crearNuevo.innerHTML = nombre_persona;
    agregarElemento(etiqueta_padre,crearNuevo);
    console.log(etiqueta_padre,crearNuevo);
}

 function agregarElemento(id,datos){
    let listado = document.getElementById(id);
    listado.appendChild(datos);
    return listado;
}
