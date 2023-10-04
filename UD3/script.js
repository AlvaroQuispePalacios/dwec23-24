/*
    Estructuras de control 
    se utuliza para controlar el flujo de un programa

    if 
    Se utilizara para ejecutar un bloque de codigo si se cumple alguna condicion
*/

/* 
    let edad = 18; 
    let esMayorDeEdad= (edad >= 18);
    //Operadores terniarios
    // ?:
    let a = 20;
    let b = 20;

    let resultado = (a > b) ? (a - b) : (b - a); 
    console.log(resultado);
    if(esMayorDeEdad){
        console.log("Es mayor");
    }else if (edad > 12) {
        console.log("Teenager");
    }else if (edad > 5) {
        console.log("Estas en primaria");
    }else {
        console.log("No eres nada ");
    }
*/

/*switch 
    Se utiliza cuando se quiera hacer una estructura condicional segun el valor que tenga una variable o expresion.
    let nombre = "Frodo";
    let edad;
    switch (nombre) {
        case "Gandalf":
            edad = 1230;
            break;
    
        case "Aragor":
            edad = 532;
            break;
        
        case "Frodo":
            edad = 70;
            break;
            
        default:
            edad = -1;
            break;
    }
    console.log("Nombre: " + nombre + " \nEdad: " + edad);
*/

/*  ITERACIONES
Se utiliza para repetir una porcion de codigo varias veces
    let contador = 5
while --> Repetir un bloque mientras se cumpla una condicion
while (contador < 5){
    console.log(contador);
        contador++;
    }
do-while --> Se utiliza para repetir un trozo de codigo al menos una vez
    let contador = 20;
    do {
        console.log(contador);
        contador--;
    }while(contador > 10)
for --> Sirve para repetir un numerp especifico de veces
break --> Se utiliza para detener la ejecucion del bucle
continue --> Se utiliza para salta a la siguiente iteracion
    for(let i = 0; i < 5 ; i++){
        if( i == 2){
            //break;/ Detiene el bloque cuando i es 2
            continue;//Salta a la siguien iteracion 
        }
        console.log(i);
    }
*/