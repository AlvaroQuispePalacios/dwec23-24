let numeroUsuario = prompt("Dime un numero de cuatro cifras");

let llegoAKraprekar = false;

//Array donde se guardaran el numero de forma ascendente y descendente
let arrayAscendente = new Array(4);
let arrayDescendente = new Array(4);

function verificarNumero(numero){
    
}

//Convierte el numero en un string y kuego los introduce a un array ya con sus elementos transformados a numero
function convertirNumero(numero){

    let numeroAString = numero.toString();

    let numeroAArray = new Array(4);

    if(numero == 6174){
        llegoAKraprekar = true;

    }else if (numero != 6174){
        //Bucle que llena a array con los datos del numero transformados a un integer
        for(let i = 0; i < 4; i++){
            numeroAArray[i] = +numeroAString.charAt(i);
        }
    }
    return numeroAArray;
}

//
function ordenarAscendenteYDescendente(arrayAOrdenar){

    //Copias para poder ordenar el array dado
    arrayAscendente = arrayAOrdenar.slice();
    arrayDescendente = arrayAOrdenar.slice();
    
    //Ordena de manera ascendente el array
    arrayAscendente.sort((a,b) => a - b);

    //Ordena de manera descendente el array
    arrayDescendente.sort((a,b) => b - a);

}

//
function kraprekar(numero){

    let contadorKraprekar = 0;
    let array;

    array = convertirNumero(numero);
    ordenarAscendenteYDescendente(array);
    
    while(llegoAKraprekar != true){

        let numeroAscendente = +arrayAscendente.join("");
    
        let numeroDescendente = +arrayDescendente.join("");
    
        let resta = numeroDescendente - numeroAscendente;
    
        ordenarAscendenteYDescendente(convertirNumero(resta));
    
        contadorKraprekar++;
    }
    
    console.log("Se necesito " + contadorKraprekar + " pasos para llegar a la constante de kraprekar");
}

kraprekar(numeroUsuario);