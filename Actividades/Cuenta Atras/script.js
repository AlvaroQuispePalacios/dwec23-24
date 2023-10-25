let elCrono;
let miFecha = new Date();
let laHora = document.getElementById("lahora");
let tiempo = parseInt(document.getElementById("tiempo"), 10);

//Pedir al usuario un numero
const numero = prompt("Elige un numero");
const convertirNumero = +numero;
console.log(convertirNumero);

//Inicializar cronometro
miFecha.setHours(0, 0, 0, 0);

//Inicializar texto 
laHora.innerHTML = "00:00:00";

function crono(){
    let segundos = convertirNumero;
    // let segundos = miFecha.getSeconds();
    let minutos = miFecha.getMinutes();
    let horas = miFecha.getHours();


    if(tiempo == 60){
        segundos = 0;
        minutos =+ 1;
        miFecha.setMinutes(minutos);
    }

    if(minutos == 60){
        minutos = 0;
        horas += 1;
        miFecha.setHours(horas);
    }

    segundos -= 1;

    // if(segundos == 60){
    //     segundos = 0;
    //     minutos += 1;

    //     miFecha.setMinutes(minutos);
    // }

    miFecha.setSeconds(segundos);

    if(horas < 10){horas = "0" + horas};
    if(minutos < 10){minutos = "0" + minutos};
    if(segundos < 10){segundos = "0" + segundos};

    laHora.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function reiniciarCrono(){
    //Inicializar cronometro
    miFecha.setHours(0, 0, 0, 0);

    //Inicializar texto 
    laHora.innerHTML = "00:00:00";
}

function start(){
    elCrono = setInterval(crono, 1000);

}

function stop(){
    clearInterval(elCrono);
}

function reset(){
    setTimeout(reiniciarCrono, 0);
}