//Inicializa la array que contendra los otros arrays
let tabla = new Array(10);

//Inicializa los arrays que estaran dentro del array principal
for(let i = 0; i < tabla.length; i++){
    tabla[i] = new Array(10);
}

//Llena los arrays
for(let fila = 0; fila < tabla.length; fila++){
    let miArrayInterior = tabla[fila];
    for(let col = 0; col <miArrayInterior.length; col++){
        miArrayInterior[col] = fila*col;
    }
}

//Recorre el array
for(let fila = 0; tabla.length; fila++){
    //Recorre los elementos de los arrays interiores
    console.log("Tabla "+ fila+ "\n");
    for(let col = 0; col <tabla[fila].length; col++){
        if(tabla[fila][col] % 2 != 0){//Condicion para mostrar solo las multiplicaciones impares
            console.log(fila+" x "+col +" = "+tabla[fila][col]);
        }
    }
}
