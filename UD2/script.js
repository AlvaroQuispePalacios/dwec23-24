/*
function saluda() {
    console.log("hola");
}
saluda();
*/

/*var, let, const
let uno = 1; let dos = 2;
//String
let caracter = "a";
let nombre = "Alvaro";
let comillas = "\"Comillas\"";
console.log(comillas);
*/

/*Numero
let numero = 123;
let numeroFalso = "123";
let precio = 9.99;
let aprobados = Infinity;
let suspendidos = -Infinity;
console.log(typeof(numero));
console.log(typeof(numeroFalso));
console.log(typeof(precio));
*/

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
// let a = 4;
// a--;
// ++a;
// console.log(a);

/*Conversion de Tipo
let a = "5";
let b = "7";
let c = "2.44"
console.log(typeof a, typeof b);
let A = +a; // es igual a parseInt(a) -->Sirve para transformar
let B = +b;
let C = +c;
console.log(typeof A, typeof B, typeof C);
*/

/*Operadores de comparacion
-->Compara dos valores y devolver un resultado
    > --> Mayor que
    < --> Menor que
    >= --> Mayor igual
    <= --> Menor igual
    == igual que
    != distinto que
    === igual en valor y tipo que
    !== distinto en valor o tipo
    console.log(5=="5");
*/

/*Operadores booleanos
Permiten comparar expresiones booleanas con las que se contruyen condiciones que se pueden aplicar en funciones, bucles, etc
    && AND Solo devuelve true cuando ambos valores lo son
    || OR devuelve true cuando uno de los dos es true
    ! NOT devuelve lo contrario al operando
    
    let a = true;
    let b = false;
    console.log(a | b);
    
    let cadena;
    if(cadena != null && cadena.lenght > 0){
        console.log(cadena.lenght);
    }else {
        console.log("Cadena vacia");
    }
*/

/*
    Se nos facilitan 3 variables que contienen informacion sobre una ciudad,
    let esCapital; //Booleana
    let numeroCiudadanos; entera
    let impuestoPorCiudadano; // float

    - esCapital: Sera cierta si y solo si la ciudad es capital.
    - numeroCiudadanos : Es el numero de ciudadanos de esta ciudad
    - impuestoPorCiudadano : Es el impuesto medio mensual que paga un ciudadano de esa ciudad

    Para nosotros, una metropolis sera una ciudad si bien es una capital  con mas de 100,000 ciudadanos o bien es una ciudad con mas de 200,000 ciudadanos
    y una renta media de 720000000 al año 

    Dar una expresion booleana con las tres variables de tal manera que sea cierta si y solo si la ciudad es una metropolis 
*/
let esCapital= false;
let numeroCiudadanos= 200001;
let impuestoPorCiudadano = 300.40;

if((esCapital == true && numeroCiudadanos > 100000) || (numeroCiudadanos > 200000 && impuestoPorCiudadano * 12 * numeroCiudadanos >= 720000000)){
    console.log("es una metropolis");
}else {
    console.log("No es una metropolis");
}
