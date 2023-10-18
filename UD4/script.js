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

    ////////////////////////////////////////////////////////METODOS DE ARRAYS///////////////////////////////////////
    //POP elimina el ultimo elemento del array y lo devuelve
    let paco = ["joan", "amparo", "Ángel", "esther", "amparo", "Zoraida", "Bárbara"];
    let otros = ["valentin", "pepe"];
    // console.log(paco);
    // let elementoEliminado = paco.pop();
    // console.log(elementoEliminado);
    //shift() --> Elimina el primer elemento del array y lo devuelve
    // let elementoEliminado = paco.shift();
    // console.log(elementoEliminado);
    //unshift() --> Agrega uno o mas elementos al principio de un array
    // paco.unshift("valentin", "pepe");
    // console.log(paco);
    //concat() --> Combina dos o mas arrays y devuelve un nuevo array
    // let combinacion = paco.concat(otros);
    // console.log(combinacion);
    //slice() --> Devuelve una copia (superficial)
    //de una porcion del array
    // let copiaPaco = paco.slice(1, 3);
    // console.log(copiaPaco);
    //splice() --> Cambia el contenido de un array eliminando, reemplzando o agregando elementos
    // paco.splice(0, 1, ...otros);//posicion, cantidad que quiero eliminar desde la posicion elegida, cualquier otra cosa que quieras agregar al array 
    console.log(paco);
    
    //indexOf() --> Devuelve el primer indice en el que se encuentra un elemento dado. Devuelve -1 si no lo encuantra
    // let indice = paco.indexOf("Esther");
    // let cadena = "Hola cara de bola";
    // indice = cadena.indexOf("a");
    // indice = paco.lastIndexOf("joan");
    // console.log(indice);
    
    //join() -->Une todos los elementos de un array en una cadena (utilizando un separador)
    // let cadena = paco.join(" x ");
    // console.log(cadena);
    
    //sort() --> Ordena los elementos de un array alfabeticamente si son cadena y numericamente si son numeros. Devuelve un array ordenado
    // let numeros = [1,2,3,4,-1, 10, 0];
    // let mixto = ["a", "hola", 1,2,3,true]
    // console.log(paco.sort());
    // console.log(numeros.sort());
    // console.log(mixto.sort());
    //ordenar correctamente con sort => uso de parametro el parametro es una funcion
    //-Esta funcion debe recibir dos valores a comparar
    //- Como resultado debe:
    //  - Devolver un valor positivo (1) si el primer valor es superior al segundo
    //  - Devolver un valor negativo (-1) si el primer valor es inferior al segundo
    //  - Devolver un valor (0) si los dos son valores son iguales o equivalente para la ordenacion
    
    //sort() en numeros
    let numeros = [10, 5, 8, 1];
    //Funcion anonima
    // console.log(numeros.sort(function(a, b){
    //     return a - b;
    // }));
    
    //Funcion flecha
    //console.log(numeros.sort((a, b) =>  a - b));
    
    // sort() en cadenas
     
    // console.log(paco.sort((a, b) => {
    //     return (a.toLowerCase() > b.toLowerCase()) ? 1 : (a.toLowerCase() < b.toLowerCase()) ? -1 :  0;
    // }));
    
    //.localeCompare Ordena todo bien :)
    console.log(paco.sort((a, b) => {
        return a.localeCompare(b);
    }));
*/
    ////////////////////////////////////FUNCIONES////////////////////////////
    /*
    function diHola(){
        console.log("Hola");
    }
    console.log(multiplica(3,10));
    
    function multiplica(c, d){
        let a = 10;
        let b= 20;
        return (a * b * c * d);
    }

    */
    ////////////////////////////////////OBJETOS////////////////////////////
    /*
        Para la clave podemos omitar las comillas

        let unCliente = {
            nombre: "Alvaro",
            apellido: "Quispe",
            "direccion fiscal": "Calle las Rosas N1 ",
            "+-+-+-+": "boquesa",
            pago: {
                tipo: "Visa",
                tarjeta: "3219587478",
                "fecha caducidad": "nunca"
            },
            vencimiento: 30
        }
        unCliente["vencimiento"] = 60;
        unCliente["pago"]["tipo"];
        console.log(unCliente);
        console.log(unCliente["+-+-+-+"]);
        console.log(unCliente["pago"]["tipo"]);
        console.log(unCliente.apellido);
        console.log(unCliente.pago.tarjeta);
        console.log(unCliente.pago["fecha caducidad"]);





        ///////////////////////////Metodos como elementos////////////////////
        let estudiante = {
            id: 1,
            nombre: "Alvaro",
            diHola: function(){
                return "hola"
            },
            notas: [10, 0, 5, 5]
        }
    
        function mediaAlumno(objeto){
            let media = 0;
            for(let i = 0; i < objeto.notas.length; i++){
                media += objeto.notas[i];
            }
            media = media/objeto.notas.length;
            return media;
        }
    
        // Agregar una propiedad al objeto
        estudiante.apellido = "Quispe"; 
        estudiante.diAdios = function(){
            return "Adios";
        }
        console.log(mediaAlumno(estudiante));
        console.log(estudiante);
    
        //THIS
        let factura = {
            descripcion: "Factura de prueba",
            precio: 100.0,
            iva: 21.0,
            subtotal: function(){
                return this.precio;       
            },
            total: function(){
                return this.precio + (this.precio * this.iva) / 100;
            }
        }
        console.log(factura);
        console.log(factura.subtotal());
        console.log(factura.total());
    
        //CONSTRUCTORES
        //No llega a ser una clase 
        function Web(){
            this.url = "http://localhost";
            this.nombre = "Localhost";
            this.muestraInformacion = function(){
                return "url: " + this.url + "\n" + "Web: " + this.nombre;
            }
        }
        //Instanciando el objeto: Se usa la palabra reservada new
        //Si no modificamos nada toma los valores por defecto del padre
        let unaWeb = new Web();
        unaWeb.url = "https://www.amazon.com";
        unaWeb.nombre = "Amazon";
        console.log(unaWeb);
        console.log(unaWeb.muestraInformacion());
    
        let otraWeb = new Web();
        otraWeb.url = "https://www.fcbarcelona.cat";
        otraWeb.nombre = "Mas que un club"
        console.log(otraWeb);
        console.log(otraWeb.muestraInformacion());
    
        //Si modifica la pseudoclase
        Web.visitas = 2;
        //Pero no modifica la instancia de esta pseudoclase
        console.log(Web.visitas);
        console.log(unaWeb.visitas);
        console.log(otraWeb.visitas);
    
        //Para poder agregar algo a la pseudoclase hay que utilizar prototype
        Web.prototype.visitas = 2;
        console.log(unaWeb.visitas);




        //Estos son objetos
        const ciudades = [
            {
                municipio: "Zaragosza",
                provincia: "Zaragoza"
            },
            {
                municipio: "Avila",
                provincia: "Avila"
            },
            {
                municipio: "Madrid",
                provincia: "Madrid"
            },
            {
                municipio: "Barcelona",
                provincia: "Barcelona"
            },
        ];
        console.log(ciudades);
        //sort() a ser un metodo se ejecuta antes asi que afecta tanto antes como despues
        ciudades.sort((a, b) => {
            return a.municipio.localeCompare(b.municipio);
        });
        console.log(ciudades);
    */


    //////////////////////////////ES6///////////////////////////////////
    /* 
    const miArray = ["A", "B", "C"];
    miArray.push("D");
    console.log(miArray);
    const A = "a";
    miArray[1] = "F"; 
    console.log(miArray);
    ///////////////////////////Desestructuracion////////////////////////
    const numeros = [1, 2, 3];
    const [a, b, c] = numeros;
    console.log(a);
    console.log(b);

    
    
    //Desestructurar Objetos
   const persona = {
       nombre: "Alvaro",
       
       edad: 22
    };
    //Para desustructurar un objeto tiene que tener el mismo nombre
 
   const {nombre, edad} = persona;
   console.log(nombre);



   const nombre = "josep";
   const edad = 33;

   const persona = {
       nombre,
       edad
   }
   console.log(persona);


   ///////////////TEMPLATE STRINGS- PLANTILLAS CADENA/////////////////////
   //Mediante el operador de interpolacion ${}, para que funcione se tiene que utilizar el acento "Catalan( `` )""
   const nombre = "Bob";
   const edad = "23";

   const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
   console.log(mensaje);


   //Operador spread(...) --> nos da los valores de un array uno a uno
   const numeros = [1, 2, 3];
   const nuevosNumeros = [...numeros, 4, 5];
   console.log(nuevosNumeros);
   

   //Parametros por defectos
   function saludar(nombre = "Invitado"){
        return (`Hola ${nombre}`);
   }
   console.log(saludar());


   
   
      //Parametros rest (rest parameter)
      //Se pasa varios parametros en uno solo utilizando un array y el operador spread(...)
      function sumar(...numeros){
           let resultado = 0;
   
           for(let numero of numeros){
               resultado += numero;
           }
   
           return resultado;
      }
      console.log(sumar(5, 4, -1, 6, 6));



      //Funciones flecha
   //    function sumar (a,b){
   //     return a +b ;
   //    }
      //Funcion flecha utilizando rest
      const sumar = (...numeros) => {
           let resultado = 0;
           for(let numero of numeros){
               resultado += numero;
           };
           return  resultado;
      };
   
      console.log(sumar(3, 2, 7));
    */

   /////////////////////METODOS DE ARRAY///////////////////////
   //forEach() ejecuta una funcion una vez por cada elemento
   const numeros = [1, 2, 3, 4, 5];
   const multiplica = (n) => {
    return n * 2;
   }; 

//    numeros.forEach((numero) =>{
//         console.log(numero);
//    });

//    numeros.forEach((numero) =>{
//         console.log(multiplica(numero)); 
//     });

    //map()--> Crea un nuevo array con los resultados de aplicar una funcion a cada elemento del array

    //const dobleNumero = numeros.map((numero) => {
    //    return multiplica(numero);
    //});


    //console.log(dobleNumero);
    
    /* 
    //filter()-->Crea un nuevo array con todos los elemento que cumplan una condicion determinada
    const numeroPares = numeros.filter((numero) =>{
        return numero % 2 === 0;
    });
 
    const numeroMayoresQueDos = numeros.filter((numero) =>{
        return numero > 2;
    });
    console.log(numeroMayoresQueDos);

 
    //reduce() --> Aplica una funcion a un acumulador y a cada elemento del array(de izquierda a derecha) para reducirlo a un UNICO valor
    const suma = numeros.reduce((acumulador, numero) =>{
        return acumulador + numero;
    }, 0);
    console.log(suma);
 
    //find()-->Devuelve el primer elemento del array que cumpla una condicion
 
    const numeroEncontrado = numeros.find((numero) =>{
        return numero < 3;
    });
    console.log(numeroEncontrado);
    

    //findIndex()-->Devuelve el incide del primer elemento del array que cumple una funcion de prueba o -1 si no encuentra nada
    const indiceEncontrado = numeros.findIndex((numero) =>{
         return numero < 3;
    });
    console.log(indiceEncontrado);
    */

    //some() --> Comprueba si al menos un elemento del array cumple una condicion determinada
    const tieneNumeroPar = numeros.some((numero) =>{
        return numero % 2 === 0;
    });
    console.log(tieneNumeroPar);

    //every()-->Comprueba si todos los elementos del array cumplen una condicion 
    const cumplen = numeros.every((numero) =>{
        return numero % 2 === 0;
    });
    console.log(cumplen);