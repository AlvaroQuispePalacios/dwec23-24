/*
    ARRAYS


    //Definir arrays
    let vacio = [];
    let primos = [2, 3, 5, 7];
    let miscelanea = [2.2, true, "Hola",];
    //Los valores de los elementos no tienen porque ser constantes
    let n = 1024;
    let tabla = [n, n+1, n+2, n+3];
    
    let contador = [,,,];
    //console.log(contador.length);
    
    //OPERADOR SPREAD
    //Nos permite juntar los arrays
    let a =[1, 2, 3];
    let b = [0, ...a, 4]; //Al poner los 3 puntos tengo que poner el nombre del array(a) que quiero juntar y este cogera elemento a elemento de este array al otro)(b)
    //console.log(b);

    let original = [1, 2, 3];
    //Sirve para hacer copias de otros array
    let copia = [...original]
    //Son arrays indenpendientes si modifico algo de la array orignal no afectar a la copia 
    original[0] = 9;
    // console.log(copia[0]);
    // console.log(original[0]);

    //Sirve para iterar elementos 
    let digitos = [..."0123456789ABCDEF"];
    console.log(digitos);

    //CONSTRUCTOR DE ARRAY
    let aa = new Array(5);//Array Vacio para poner tamaño al array se le pone un numero en parentesis
    console.log(aa);
    let bb = new Array(1, 2, 3, 4, -1, "hola", true,);//Array inicializado con elementos
    console.log(bb);
    //let cc = new Array.of(10);//Nos dice que queremos un elemento con el valor de 10
    
    //PUSH
    //Sirve para agregar un elemento a la ultima posicion de la array
    aa.push(5);
    console.log(aa[aa.length-1]);

    let aaa = [1, 2, 3];
    console.log(aaa);
    delete aaa[2];
    console.log(aaa);
    
    let i = 2;
    if (aaa[i]){
        console.log(aaa[i]);
    } else {
        console.log("slot cavio");
    }
    
    //ITERAR ARRAYS
    let letras = [..."Hola amiguitos"];//pone hola amiguitos letra por letra 
    console.log(letras);
    let aux = "";
    
    for(let letra of letras){
        aux += letra;
    }
    //console.log(aux);
    
    aux = "";
    let suma = 0;
    //Toma la posicion y se fija si es par si lo es guarda el valor de esa posicion en aux
    for(let [index, letra]  of letras.entries()){
        //suma += index;
        //aux += letra;
        if (index % 2 === 0) aux += letra;
    }
    // console.log(aux);
    // console.log(suma);
    
    let mayusculas = "";
    let cont = 0;
    //.forEach es un metodo de los arrays
    //Letra iterar letras
    letras.forEach(letra => {
        if(cont % 2 === 0) mayusculas += letra.toUpperCase();
        cont++;
    });
    
    console.log(mayusculas);
    
    let letra = "";
    let vocales = "";
    for(let i = 0; i < letras.length; i++){
        letra = letras[i];
        if(/[aeiou]/.test(letra)){//Verifica si la variable letra es una vocal y si lo es lo guarda en vocales
            vocales += letra;
        }
    }
    console.log(vocales);
*/
    //ARRAYS MULTIDIMENSIONALES
    let tabla = new Array(10);
    for(let i = 0; i < tabla.length; i++){
        tabla[i] = new Array(5);// Cada fila va a tener 5 columnas
    }

    for(let fila = 0; fila < tabla.length; fila++){
        let miArrayInterior = tabla[fila];
        for(let col = 0; col <miArrayInterior.length; col++){
            miArrayInterior[col] = fila*col;
        }
    }

    console.log(tabla);