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
*/

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









