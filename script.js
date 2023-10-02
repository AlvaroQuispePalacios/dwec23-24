/*
function saluda() {
    console.log("hola");
}
saluda();
*/

//var, let, const
let uno = 1; let dos = 2;
//String
let caracter = "a";
let nombre = "Alvaro";
let comillas = "\"Comillas\"";
console.log(comillas);
//Numero
let numero = 123;
let numeroFalso = "123";
let precio = 9.99;
let aprobados = Infinity;
let suspendidos = -Infinity;
// console.log(typeof(numero));
// console.log(typeof(numeroFalso));
// console.log(typeof(precio));

//null
// Es un valor no existente pero esta definido
let valor = null;
console.log(valor);

//undefined
let algo;
console.log(undefined);

//NaN
let algoMas = "algo" / 2;
console.log(algoMas);

//typeof --> Muestra el tipo de dato le pasamos; delete --> Funciona para eliminar cosas de un objeto
let edad2 = 23;
delete(edad2);
console.log(edad2);
 
//Objetos 
let persona = {
    nombre : "Alvaro",
    edad : 22
}

console.log(persona.nombre);
delete persona.nombre;
console.log(persona.nombre);

//Boolean
let verdadero = true;
let falso = false;
// valores que pueden ser consideros falso null, una cadena v4cia, undefined, NaN, o algo igual a 0

//Operadores aritmeticos
//+, -, *, /, %
// ++ incrementa
// -- decrementa
// += //a+=b --> a = a + b;
// -= //a-=b --> a = a - b;
// *= //a*=b --> a = a * b;
// /= //a/=b --> a = a / b;
// %= //a%=b --> a = a % b;
// - cambio de signo a = 5, b = -a;
let a = 4;
a--;
++a;
console.log(a);

