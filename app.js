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
    let listado = document.getElementById('listaAmigos');
    listado.appendChild(crearElemento("li", nuevo_amigo));
}

function hola(){
    let ganador = Math.floor(Math.random()*amigos.length);
    console.log(amigos[ganador]);
    console.log(ganador);
    let listado = document.getElementById('resultado');
    listado.appendChild(crearElemento("li",amigos[ganador]));
    
}

function crearElemento(etiqueta,nombre_persona) {
    let crearNuevo = document.createElement(etiqueta);
    crearNuevo.innerHTML = nombre_persona;
    return crearNuevo; 
}

