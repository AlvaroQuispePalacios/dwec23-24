
let urano = ["Urano", 3000000000, "60 veces el tamaño de la tierra","13-3-1781"];
let marte = ["Marte", 228000000, "Mitad de la tierra aprox", "1610"];
let neptuno = ["Neptuno", 45000000000, "17 veces la tierra", "23-09-1846"];
let jupiter = ["Jupiter", 750000000, "318 veces la tierra" ,"1600"];
let mercurio = ["Mercurio", 58000000, "1/3 de la tierra" ,"265"];

let cantidadPlanetas = [urano, marte, neptuno, jupiter, mercurio];

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


for(let i = 0; i < cantidadPlanetas.length; i++){
    let planetaCreado = new Planeta();
    planetaCreado.nombre = cantidadPlanetas[i][0];
    planetaCreado.distanciaAlSol = cantidadPlanetas[i][1];
    planetaCreado.tamañoAComparacionDeLaTierra = cantidadPlanetas[i][2];
    planetaCreado.fechaDescubrimiento = cantidadPlanetas[i][3];
    console.log(planetaCreado.mostrarInformacion());

}

console.log(cantidadPlanetas.sort());
