let numeroUsuario = prompt("Dime un numero de cuatro cifras");
let arrayNumeroUsuario = new Array(4);
let contadorKraprekar = 0;
//Array donde se guardaran el numero de forma ascendente y descendente
let numeroUsuarioAscendente = new Array(4);
let numeroUsuarioDescendente = new Array(4);

//
function convertirNumeroUsuario(){
    //Bucle que llena el arrayNumeroUsuario con el numero del usuario y los transforma a un numero cada elemento 
    for(let i = 0; i < 4; i++){
        arrayNumeroUsuario[i] = +numeroUsuario.charAt(i);
        console.log(arrayNumeroUsuario);
    }
}

//
function ordenarArrays(arrayAOrdenar){
    //Copias para poder ordenar el array dado
    numeroUsuarioAscendente = arrayAOrdenar.slice();
    numeroUsuarioDescendente = arrayAOrdenar.slice();
    
    //Ordena de manera ascendente el array
    numeroUsuarioAscendente.sort((a,b) => a - b);
    //Ordena de manera descendente el array
    numeroUsuarioDescendente.sort((a,b) => b - a);

}

//
function kraprekar(){
    let numeroAscendente = +numeroUsuarioAscendente.join("");
    let numeroDescendente = +numeroUsuarioDescendente.join("");
    let resta = numeroAscendente - numeroDescendente;


}

convertirNumeroUsuario();
ordenarArrays(arrayNumeroUsuario);

console.log(numeroUsuarioAscendente);
console.log(numeroUsuarioDescendente);

