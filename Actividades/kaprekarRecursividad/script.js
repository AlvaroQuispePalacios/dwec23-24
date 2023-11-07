const NUMEROKAPREKAR = 6174;
let numeroUsuario = prompt("Dime un numero de cuatro cifras");

let contadorKaprekar = 0;

//Verifica si el numero es de 4 cifras y que tenga como minimo dos diferentes

//AUN FALTA D:
function validarNumero(numeroArray) {

    console.log(transformarNumero);
  let numeroValido = false;

  if (transformarNumero == null || isNaN(transformarNumero)) {
    numeroValido = false;
  }

  if (transformarNumero.length == 4) {
    for (let i = 0; i < 3; i++) {
      if (transformarNumero.charAt(i) != transformarNumero.charAt(i + 1)) {
        numeroValido = true;
      }
    }
  }
  return numeroValido;
}

function kaprekar(numero) {

    let numeroAString = numero.toString();
    let numeroAArray = new Array(4);



    let resta = 0;
    let arrayAscendente = new Array(4);
    let arrayDescendente = new Array(4);

    if (numero == NUMEROKAPREKAR) {
      console.log(
        "Se necesito  " + contadorKaprekar + " para llegar a kaprekar"
      );
      return 1;

    } else if (numero != NUMEROKAPREKAR) {
      //Bucle que llena a array con los datos del numero transformados a un integer
      for (let i = 0; i < 4; i++) {
        numeroAArray[i] = +numeroAString.charAt(i);
      }

      //Copias para poder ordenar el array dado
      arrayAscendente = numeroAArray.slice();
      arrayDescendente = numeroAArray.slice();

      //Ordena de manera ascendente el array
      arrayAscendente.sort((a, b) => a - b);

      //Ordena de manera descendente el array
      arrayDescendente.sort((a, b) => b - a);

      let numeroAscendente = +arrayAscendente.join("");
      let numeroDescendente = +arrayDescendente.join("");

      resta = numeroDescendente - numeroAscendente;
    //   console.log(resta + " = " + numeroDescendente + " - " + numeroAscendente);
      contadorKaprekar++;
    }
    return kaprekar(resta);


}

kaprekar(numeroUsuario);
