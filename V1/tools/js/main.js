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
let esfOjo1Adaptado;
let cilOjo1Adaptado;
let esfOjo2Adaptado;
let cilOjo2Adaptado;

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

//Función para ingresar datos
const ingresoDatosReceta = () => {
    if (ojoACalcular == "od" || ojoACalcular == "ao") {
        let paramGraduacion1 = Number(prompt(`Ingrese graduación esférica para el OD (sin puntuación)`));
        esfOjo1 = validoGraduacion(paramGraduacion1);
        let paramGraduacion2 = Number(prompt(`Ingrese graduación cilíndrica para el OD (sin puntuación)`));
        cilOjo1 = validoGraduacion(paramGraduacion2);
        let paramEje = Number(prompt(`Ingrese el eje para el OD`));
        ejeOjo1 = validoEje(paramEje);
    } else {
        esfOjo1 = null;
        cilOjo1 = null;
        ejeOjo1 = null
    }
    if (ojoACalcular == "oi" || ojoACalcular == "ao") {
        let paramGraduacion3 = Number(prompt(`Ingrese graduación esférica para el OI (sin puntuación)`));
        esfOjo2 = validoGraduacion(paramGraduacion3);
        let paramGraduacion4 = Number(prompt(`Ingrese graduación cilíndrica para el OI (sin puntuación)`));
        cilOjo2 = validoGraduacion(paramGraduacion4);
        let paramEje2 = Number(prompt(`Ingrese el eje para el OI`));
        ejeOjo2 = validoEje(paramEje2);
    } else {
        esfOjo2 = null;
        cilOjo2 = null;
        ejeOjo2 = null;
    }
    let paramDistancia = Number(prompt(`Ingrese la distancia al vertice`));
    distanciaVertice = validoDistancia(paramDistancia);
}

//Testeos
console.log(esfOjo2);

//Constructor receta para ambos ojos
function Receta (ojo1, esfOjo1, cilOjo1, ejeOjo1, ojo2, esfOjo2, cilOjo2, ejeOjo2){
    this.ojo1 = ojo1;
    this.esfOjo1 = esfOjo1;
    this.cilOjo1 = cilOjo1;
    this.ejeOjo1 = ejeOjo1;
    this.ojo2 = ojo2;
    this.esfOjo2 = esfOjo2;
    this.cilOjo2 = cilOjo2;
    this.ejeOjo2 = ejeOjo2;    
}
//Llamo Funciones para ingresar datos
validaOjo();
ingresoDatosReceta();

//Creo nuevo objeto Receta con las graduaciones originales
const recetaOriginal = new Receta ("OD", esfOjo1, cilOjo1, ejeOjo1, "OI", esfOjo2, cilOjo2, ejeOjo2);

/*Función para calcular distometria
Se calcula distometría entera según la formula DC = D / (1-xD)
DC = Receta adaptada a Lentes de Contacto
D = Receta de lentes aereos
x = Distancia al vértice (en metros)
*/
const distometria = () => {
    if (ojoACalcular == "od" || ojoACalcular == "ao") {
        esfOjo1Adaptado = 
            Math.round((
            parseFloat(esfOjo1/100) / (1-((parseFloat(distanciaVertice)/1000)*parseFloat(esfOjo1/100)))
            )*100)/100;
        cilOjo1Adaptado = 
            Math.round((
            parseFloat(cilOjo1/100) / (1-((parseFloat(distanciaVertice)/1000)*parseFloat(cilOjo1/100)))     
            )*100)/100;
    } else {
        esfOjo1Adaptado = null;
        cilOjo1Adaptado = null;
    }
    if (ojoACalcular == "oi" || ojoACalcular == "ao") {
        esfOjo2Adaptado = 
            Math.round((
            parseFloat(esfOjo2/100) / (1-((parseFloat(distanciaVertice)/1000)*parseFloat(esfOjo2/100)))
            )*100)/100;
        cilOjo2Adaptado = 
            Math.round((
            parseFloat(cilOjo2/100) / (1-((parseFloat(distanciaVertice)/1000)*parseFloat(cilOjo2/100)))     
            )*100)/100;
    } else {
        esfOjo2Adaptado = null;
        cilOjo2Adaptado = null;
    }
}

//Llamo función para calcular distometria
distometria();

//Creo nuevo objeto Receta con las graduaciones originales
const recetaAdaptada = new Receta ("OD", esfOjo1Adaptado, cilOjo1Adaptado, ejeOjo1, "OI", esfOjo2Adaptado, cilOjo2Adaptado, ejeOjo2);

//Función para mostrar datos
const muestroDatos = () => {
    if (ojoACalcular == "od"){
        alert(`La receta original ingresada es:
        ${ojoACalcular.toUpperCase()} ${recetaOriginal.esfOjo1/100} ${recetaOriginal.cilOjo1/100} x ${recetaOriginal.ejeOjo1}º`);
        alert(`La receta adaptada a LC con una distancia al vertice de ${distanciaVertice} es: 
        ${ojoACalcular.toUpperCase()} ${recetaAdaptada.esfOjo1} ${recetaAdaptada.cilOjo1} x ${recetaAdaptada.ejeOjo1}º`);
    } else if (ojoACalcular == "oi"){
        alert(`La receta original ingresada es:
        ${ojoACalcular.toUpperCase()} ${recetaOriginal.esfOjo2/100} ${recetaOriginal.cilOjo2/100} x ${recetaOriginal.ejeOjo2}º`);
        alert(`La receta adaptada a LC con una distancia al vertice de ${distanciaVertice} es: 
        ${ojoACalcular.toUpperCase()} ${recetaAdaptada.esfOjo2} ${recetaAdaptada.cilOjo2} x ${recetaAdaptada.ejeOjo2}º`);
    } else {
        alert(`La receta original ingresada es:
        OD: ${recetaOriginal.esfOjo1/100} ${recetaOriginal.cilOjo1/100} x ${recetaOriginal.ejeOjo1}º
        OI: ${recetaOriginal.esfOjo2/100} ${recetaOriginal.cilOjo2/100} x ${recetaOriginal.ejeOjo2}º`);
        alert(`La receta adaptada a LC con una distancia al vertice de ${distanciaVertice} es: 
        OD: ${recetaAdaptada.esfOjo1} ${recetaAdaptada.cilOjo1} x ${recetaAdaptada.ejeOjo1}º;
        OI: ${recetaAdaptada.esfOjo2} ${recetaAdaptada.cilOjo2} x ${recetaAdaptada.ejeOjo2}º`);
    }
}

//Muestro Datos
muestroDatos();

//Control
console.log(recetaOriginal);
console.log(recetaAdaptada);
console.log(distanciaVertice);