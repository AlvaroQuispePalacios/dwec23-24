let numeroUsuario = prompt("Dime un numero de cuatro cifras");

let llegoAKraprekar = false;

//Array donde se guardaran el numero de forma ascendente y descendente
let arrayAscendente = new Array(4);
let arrayDescendente = new Array(4);

//Verifica si el numero es de 4 cifras y que tenga como minimo dos diferentes
function verificarNumero(numero){
    
    let numeros = new Array(4);
    let confirmarQueSeaUnNumero = new Array(4);
    let esUnNumero = false;
    let dosNumerosDiferentes = false;

    if(numero.length == 4){
        
        //Verifica que es un numero
        for(let i = 0; i < 4; i++){

            numeros[i] = +numero.charAt(i);
            console.log(numeros[i]);
            if(numeros[i] == null || numeros[i] == isNaN){
                confirmarQueSeaUnNumero[i] == false;

            }else if (numeros[i] >= 0 && numeros[i] < 10){
                confirmarQueSeaUnNumero[i] = true;

            }
            // console.log(numeros[i]);
            console.log(confirmarQueSeaUnNumero[i]);
        }

        for(let i = 0; i < confirmarQueSeaUnNumero.length; i++){
            if(confirmarQueSeaUnNumero[i] == false){
                esUnNumero = false;
            }
        }

        console.log(esUnNumero);
        
        //Verifica que dos numeros sean diferentes
        for(let i = 0; i < 3; i++){
            if(numeros[i] != numeros[i+1]){
                dosNumerosDiferentes = true;
            }
        }

        console.log(dosNumerosDiferentes);
    }
    return dosNumerosDiferentes && esUnNumero;
}

//Convierte el numero en un string y luego los introduce a un array ya con sus elementos transformados a numero
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

//Funcion que ordena de orden ascendente y descendente la array 
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

    if(verificarNumero(numero)){
        
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

    }else{
        console.log("El numero no es valido");
    }
    
}

// kraprekar(numeroUsuario);
console.log(verificarNumero(numeroUsuario) ? "Es valido" : "No es valido");