// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
const amigo = document.getElementById('amigo').value;

if(amigo == ""){
    console.log('vacio pana');
}
else {
    listadoAmigos(amigo.toUpperCase());
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
    /*  amigos.forEach(ganador => {
        console.log(ganador[ganador]);
    });  */

    let ganador = Math.floor(Math.random()*amigos.length);
    console.log(amigos[ganador]);
    console.log(ganador);
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.innerHTML = amigos[ganador];
    let listado = document.getElementById('resultado');
    listado.appendChild(nuevoAmigo);
    
}




