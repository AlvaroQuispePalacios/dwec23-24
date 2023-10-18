//Variables que contienen la informacion de los planetas
//nombre , distanciaAlSol, tamañoAComparacionDeLaTierra, fechaDescubrimiento
let urano = ["Urano", 3000000000, "60 veces el tamaño de la tierra","13-3-1781"];
let marte = ["Marte", 228000000, "Mitad de la tierra aprox", "1610"];
let neptuno = ["Neptuno", 45000000000, "17 veces la tierra", "23-09-1846"];
let jupiter = ["Jupiter", 750000000, "318 veces la tierra" ,"1600"];
let mercurio = ["Mercurio", 58000000, "1/3 de la tierra" ,"265"];

//Array que contiene los otros arrays con la informacion de cada planeta
let planetas = [urano, marte, neptuno, jupiter, mercurio];

//Pseudoclase Planeta
function Planeta(){
    this.nombre;
    this.distanciaAlSol;
    this.tamañoAComparacionDeLaTierra;
    this.fechaDescubrimiento;
    this.mostrarInformacion = function(){
        return  "Nombre: " + this.nombre + "\n"+
                "Distancia al sol: " + this.distanciaAlSol + "\n"+
                "Tamaño: " + this.tamañoAComparacionDeLaTierra + "\n"+
                "Descubrimiento: " + this.fechaDescubrimiento + "\n";
    }
}

//Variable donde se guardaran los objetos planeta
let objetoPlanetas = [];

//Array que instancia el objeto planeta con la informacion de los planetas y los muestra por consola
for(let i = 0; i < planetas.length; i++){
    let planetaCreado = new Planeta();
    planetaCreado.nombre = planetas[i][0];
    planetaCreado.distanciaAlSol = planetas[i][1];
    planetaCreado.tamañoAComparacionDeLaTierra = planetas[i][2];
    planetaCreado.fechaDescubrimiento = planetas[i][3];
    
    objetoPlanetas.push(planetaCreado);
    console.log(planetaCreado.mostrarInformacion());
}

//Mostrar los planetas ordenados en orden ascendente respecto a su distancia al sol
 console.log(objetoPlanetas.sort(function(a, b){
    return a.distanciaAlSol - b.distanciaAlSol;
 }));