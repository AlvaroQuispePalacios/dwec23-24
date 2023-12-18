/*
La pagina web crea el DOM, el navegador crea un objeto document, estructura en forma de arbolñ
html -->Nodo Raiz
    -head

    -body
        .div
        .h1
        .article
        .p
*/


/*
querySelector -->Pide como parametro un selector CSS toma el primero que aparecera "const para = document.querySelector('.error');"


const para = document.querySelector('div.error');
const para = document.querySelector('body > h2');
const para = document.querySelector('body > h2:nth-child(2)');
const para = document.querySelector('body > div:nth-child(4) > p:nth-child(2)');
*/



/*
querySelectorAll --> Pide como parametro un selector CSS, Agarra un grupo de elementos, no tiene metodos de array tiene parecidos pero no es un array se puede convertir en uno

const paras = document.querySelectorAll('p');
console.log(paras);
// console.log(paras[0]);
paras.forEach(para => {
    console.log(para); 
});
*/


/*
getElementById -->Pide como parametro la id del elemento que queremos buscar

const titulo = document.getElementById('titulo');
console.log(titulo);
*/



/*
getElementsByClassName -->Pide la clase asociada a ese elemento, devuelve un HTMLCollection no es un array pero tiene cosas parecidas

const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[1]);
*/



/*
getElementsByTagName -->Pide como parametro el nombre del tag del elemento, devuelve un HTMLCollections

const paras = document.getElementsByTagName('p');
console.log(paras);
*/



/*
Modificar el contenido de la pagina
//innerHTML --> Nos devuelve el contenido 
//innerText -->


// let para = document.querySelector('h2');
let paras = document.querySelectorAll('p');
let p1 = paras[0];
let contenidoP1 = p1.innerText;
console.log(contenidoP1);
p1.innerHTML = "Requete";
contenidoP1 = p1.innerText;
console.log(contenidoP1);
*/


/*
Obtener y establecer atributos

let enlace = document.querySelector('a');
let url = enlace.getAttribute("href");
console.log(url);

enlace.setAttribute("href", "http://www.seat.es");
url = enlace.getAttribute("href");
console.log(url);


*/



/*
Añadir y eliminar estilos

//style
let error = document.querySelector('body > div.error');
error.style.backgroundColor = "blue";
error.style.backgroundColor = "";

*/

/*
Añadir y eliminar clases
classList --> nos devuelve una lista de las clases que tiene ese elemento

classList.add --> Añade una clase a un elemento
classList.remove --> Quita una clase a un elemento

let error = document.querySelector('body > div.error');
error.classList.add("paco");
error.classList.remove("error");
*/

/*
.parentNode --> Nos permite selecionar el padre de un elemento hijo 

let paras = document.getElementsByTagName('p');
console.log(paras);
let hijo = paras[2];
console.log(hijo);
let padre = hijo.parentNode;
console.log(padre);

let primerHermano = padre.firstElementChild;
console.log(primerHermano);
let siguienteHermano = hijo.nextElementSibling;
console.log(siguienteHermano);

*/



/*
EVENTOS
Referenciamos el elemento del DOM 


const par = document.querySelector('p');
// Creamos un evento para ese elemento
par.addEventListener('click', (e) =>{
    // escribeLog();
    // console.log(e.target);
    console.log(e.target.innerText);
    // con target puedo acceder al elemento y sus propiedades
    e.target.innerText = "texto";
    console.log(e.target.innerText);

});

// par.addEventListener('mouseover', () => {
//     escribeOtroLog();
// });

function escribeLog(){
console.log("Has hecho click en un parrafo");
}

function escribeOtroLog(){
    console.log("has pasado por encima");
}

document.addEventListener('keydown', (e) => {
    console.log("tecla presionada: " + e.key);
});
*/