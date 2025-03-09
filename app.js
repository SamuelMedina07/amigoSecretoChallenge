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

function listadoAmigos(nuevo){    
    amigos.push(nuevo);
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.innerHTML = nuevo;
    let listado = document.getElementById('listaAmigos');
    listado.appendChild(nuevoAmigo);
}


function hola(){
    let ganador = Math.floor(Math.random()*amigos.length);
    console.log(amigos[ganador]);
    console.log(ganador);
    crearElemento("li");
    //let nuevoAmigo = document.createElement("li");
    crearNuevo.innerHTML = amigos[ganador];
    //nuevoAmigo.innerHTML = amigos[ganador];
    let listado = document.getElementById('resultado');
    listado.appendChild(nuevoAmigo);
    
}

function crearElemento(etiqueta) {
    let crearNuevo = document.createElement(etiqueta);
    return crearNuevo; 
}

