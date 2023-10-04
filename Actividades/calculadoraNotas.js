//Declaracion de variables
let nombreEstudiante = "Alvaro";
let notaExamen1 = 5.50;
let notaExamen2 = 5.20;
let notaProyecto = 7.80;
let notaFinal = (notaExamen1 + notaExamen2 + (notaProyecto*3)) / 5 ; // Calculo de la nota final

if(notaFinal >= 7){
    console.log("Nombre: "+ nombreEstudiante + "\nExamen 1: "+notaExamen1 +  "\nExamen 2: "+notaExamen2 + "\nProyecto: "+ notaProyecto+ "\nNota Final: "+ notaFinal + "\nFelicidades");
}else{
    console.log("Necesita mejorar");
    console.log(notaFinal);
}
