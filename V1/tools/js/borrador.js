alert("CALCULO DISTOMETRIA - Adaptación a lentes de contacto");

//Declaro Variables
let ojoACalcular;
let esfOjo1;
let cilOjo1;
let ejeOjo1;
let esfOjo2;
let cilOjo2;
let ejeOjo2;
let distanciaVertice;

//Función ingresa y valida ojo a calcular
const validaOjo = () => {
    ojoACalcular = (prompt("¿La receta es para Ojo Derecho, Ojo Izquierdo o Ambos Ojos? Ingrese OD, OI o AO").toLowerCase());
    while (ojoACalcular != "od" && ojoACalcular != "oi" && ojoACalcular != "ao"){
        ojoACalcular = (prompt("Debe ingresar OD, OI o AO").toLowerCase());
    }
}

//Funcion Valida Graduacion
const validoGraduacion = (graduacionIngresada) => {
    while (graduacionIngresada % 25 != 0){
        graduacionIngresada = Number(prompt("Por favor, ingrese correctamente la graduación"));
    }
    return graduacionIngresada;
}

//Funcion Valida Eje
const validoEje = (ejeIngresado) => {
    while (ejeIngresado < 0 || ejeIngresado > 180){
        ejeIngresado = Number(prompt("El eje debe ser un valor entre 0 y 180"));
    }
    return ejeIngresado;
}

//Funcion Valida DistanciaAlVertice
const validoDistancia = (distanciaIngresada) => {
    while (distanciaIngresada < 13 || distanciaIngresada > 17){
        distanciaIngresada = Number(prompt("La distancia al vértice debe ser entre 13 mm y 17 mm"));
    }
    return distanciaIngresada;
}

//Función datos para ojo simple
const ingresoDatosRecetaSimple = () => {
    let paramGraduacion1 = Number(prompt(`Ingrese graduación esférica para el ${(ojoACalcular).toUpperCase()} (sin puntuación)`));
    esfOjo1 = validoGraduacion(paramGraduacion1);
    let paramGraduacion2 = Number(prompt(`Ingrese graduación cilíndrica para el ${ojoACalcular.toUpperCase()} (sin puntuación)`));
    cilOjo1 = validoGraduacion(paramGraduacion2);
    let paramEje = Number(prompt(`Ingrese el eje para el ${ojoACalcular.toUpperCase()}`));
    ejeOjo1 = validoEje(paramEje);
    let paramDistancia = Number(prompt(`Ingrese la distancia al vertice`));
    distanciaVertice = validoDistancia(paramDistancia);
}

//Función datos para ambos ojos
const ingresoDatosRecetaDoble = () => {
    let paramGraduacion1 = Number(prompt(`Ingrese graduación esférica para el OD (sin puntuación)`));
    esfOjo1 = validoGraduacion(paramGraduacion1);
    let paramGraduacion2 = Number(prompt(`Ingrese graduación cilíndrica para el OD (sin puntuación)`));
    cilOjo1 = validoGraduacion(paramGraduacion2);
    let paramEje = Number(prompt(`Ingrese el eje para el OD`));
    ejeOjo1 = validoEje(paramEje);
    let paramGraduacion3 = Number(prompt(`Ingrese graduación esférica para el OI (sin puntuación)`));
    esfOjo2 = validoGraduacion(paramGraduacion3);
    let paramGraduacion4 = Number(prompt(`Ingrese graduación cilíndrica para el OI (sin puntuación)`));
    cilOjo2 = validoGraduacion(paramGraduacion4);
    let paramEje2 = Number(prompt(`Ingrese el eje para el OI`));
    ejeOjo2 = validoEje(paramEje2);
    let paramDistancia = Number(prompt(`Ingrese la distancia al vertice`));
    distanciaVertice = validoDistancia(paramDistancia);
}


//Constructor receta para un solo ojo
function RecetaSimple (ojo, esfOjo1, cilOjo1, ejeOjo1) {
    this.ojo = ojo;
    this.esfOjo1 = esfOjo1;
    this.cilOjo1 = cilOjo1;
    this.ejeOjo1 = ejeOjo1;
}

//Constructor receta para ambos ojos
function RecetaOriginal (ojo1, esfOjo1, cilOjo1, ejeOjo1, ojo2, esfOjo2, cilOjo2, ejeOjo2){
    this.ojo1 = ojo1;
    this.esfOjo1 = esfOjo1;
    this.cilOjo1 = cilOjo1;
    this.ejeOjo1 = ejeOjo1;
    this.ojo2 = ojo2;
    this.esfOjo2 = esfOjo2;
    this.cilOjo2 = cilOjo2;
    this.ejeOjo2 = ejeOjo2;    
}


/*const definirReceta = () => {
    if (ojoACalcular != "ao"){
        const nuevaReceta = new RecetaSimple (ojoACalcular, esfOjo1, cilOjo1, ejeOjo1);
        console.log(nuevaReceta);
    } else {
        alert("Hubo algun error");
    }
}*/

//Llamo Funciones
validaOjo();
ingresoDatosRecetaSimple();
ingresoDatosRecetaDoble();
//definirReceta();
const nuevaReceta = new RecetaSimple (ojoACalcular, esfOjo1, cilOjo1, ejeOjo1);

const nuevaReceta2 = new RecetaDoble ("OD", esfOjo1, cilOjo1, ejeOjo1, "OI", esfOjo2, cilOjo2, ejeOjo2);


/*console.log(ojoACalcular);
console.log(esfOjo1);
console.log(cilOjo1);
console.log(ejeOjo1);*/

console.log(nuevaReceta);
console.log(nuevaReceta2);
console.log(distanciaVertice);


