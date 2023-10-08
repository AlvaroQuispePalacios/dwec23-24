//Variables del año 2010
let anyo2010Junio = 25.8;
let anyo2010Julio = 28.6;
let anyo2010Agosto = 30.1;

//Variables del año 2015
let anyo2015Junio = 26.5;
let anyo2015Julio = 29.3;
let anyo2015Agosto = 30.8;

//Variables del año 2020
let anyo2020Junio = 27.2;
let anyo2020Julio = 29.9;
let anyo2020Agosto = 31.5;

//Calculo de la media del año 2010
let mediaAnyo2010 = (anyo2010Junio + anyo2010Julio + anyo2010Agosto) / 3; 
//Calculo de la media del año 2015
let mediaAnyo2015 = (anyo2015Junio + anyo2015Julio + anyo2015Agosto) / 3;
//Calculo de la media del año 2020
let mediaAnyo2020 = (anyo2020Junio + anyo2020Julio + anyo2020Agosto) / 3;

// Calcular la media en Fahrenheit y kelvin del año 2010
let mediaAnyo2010Fahrenheit = (mediaAnyo2010*9/5) + 32;
let mediaAnyo2010Kelvin = mediaAnyo2010 + 273.15;

// Calcular la media en Fahrenheit y kelvin del año 2015
let mediaAnyo2015Fahrenheit = (mediaAnyo2015*9/5) + 32;
let mediaAnyo2015Kelvin = mediaAnyo2015 + 273.15;

// Calcular la media en Fahrenheit y kelvin del año 2020
let mediaAnyo2020Fahrenheit = (mediaAnyo2020*9/5) + 32;
let mediaAnyo2020Kelvin = mediaAnyo2020 + 273.15;

//Ver si la media va superar los 30 grados y enviar un mensaje en consecuencia
let superadoAnyo2010 = (mediaAnyo2010 > 30) ? "La media no va superar los 30 grados celcius" : "La media no va a superar los 30 grados celcius"; 
let superadoAnyo2015 = (mediaAnyo2015 > 30) ? "La media no va superar los 30 grados celcius" : "La media no va a superar los 30 grados celcius";
let superadoAnyo2020 = (mediaAnyo2020 > 30) ? "La media no va superar los 30 grados celcius" : "La media no va a superar los 30 grados celcius";

console.log("Temperatura media año 2010: \n" + mediaAnyo2010 + "°C\n" + mediaAnyo2010Fahrenheit + "°F\n" + mediaAnyo2010Kelvin + "°K\n" + superadoAnyo2010);
console.log("Temperatura media año 2015: \n" + mediaAnyo2015 + "°C\n" + mediaAnyo2015Fahrenheit + "°F\n" + mediaAnyo2015Kelvin + "°K\n" + superadoAnyo2015);
console.log("Temperatura media año 2020: \n" + mediaAnyo2020 + "°C\n" + mediaAnyo2020Fahrenheit + "°F\n" + mediaAnyo2020Kelvin + "°K\n" + superadoAnyo2020);