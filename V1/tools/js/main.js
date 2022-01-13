alert("CALCULO DISTOMETRIA - Adaptación a lentes de contacto");

//Declaro Variables
let ojoACalcular;
let esfOjo1;
let cilOjo1;
let ejeOjo1;
let distanciaVertice;
let esfOjo1Adaptado;
let cilOjo1Adaptado;


//Función ingresa y valida ojo a calcular
const validaOjo = () => {
    ojoACalcular = (prompt("¿La receta es para Ojo Derecho u Ojo Izquierdo? Ingrese OD u OI").toLowerCase());
    while (ojoACalcular != "od" && ojoACalcular != "oi"){
        ojoACalcular = (prompt("Debe ingresar OD u OI").toLowerCase());
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

//Función ingreso de datos para receta
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

//Constructor receta para un solo ojo
function RecetaSimple (ojo, esfOjo1, cilOjo1, ejeOjo1) {
    this.ojo = ojo;
    this.esfOjo1 = esfOjo1;
    this.cilOjo1 = cilOjo1;
    this.ejeOjo1 = ejeOjo1;
}

//Llamo Funciones para ingresar datos
validaOjo();
ingresoDatosRecetaSimple();

//Creo nuevo objeto Receta con las graduaciones originales
const recetaOriginal = new RecetaSimple (ojoACalcular, esfOjo1, cilOjo1, ejeOjo1);

/*Función para calcular distometria
Se calcula distometría entera según la formula DC = D / (1-xD)
DC = Receta adaptada a Lentes de Contacto
D = Receta de lentes aereos
x = Distancia al vértice (en metros)
*/
const distometria = () => {
    esfOjo1Adaptado = 
        Math.round((
        parseFloat(esfOjo1/100) / (1-((parseFloat(distanciaVertice)/1000)*parseFloat(esfOjo1/100)))
        )*100)/100;
    cilOjo1Adaptado = 
        Math.round((
        parseFloat(cilOjo1/100) / (1-((parseFloat(distanciaVertice)/1000)*parseFloat(cilOjo1/100)))     
        )*100)/100;
}

//Llamo función para calcular distometria
distometria();

//Creo nuevo objeto Receta con las graduaciones originales
const recetaAdaptada = new RecetaSimple (ojoACalcular, esfOjo1Adaptado, cilOjo1Adaptado, ejeOjo1);

//Función para mostrar datos
const muestroDatos = () => {
    alert(`La receta original ingresada es:
    ${recetaOriginal.ojo.toUpperCase()} ${recetaOriginal.esfOjo1/100} ${recetaOriginal.cilOjo1/100} x ${recetaOriginal.ejeOjo1}º`);
    alert(`La receta adaptada a LC con una distancia al vertice de ${distanciaVertice} es: 
    ${recetaAdaptada.ojo.toUpperCase()} ${recetaAdaptada.esfOjo1} ${recetaAdaptada.cilOjo1} x ${recetaAdaptada.ejeOjo1}º`);
}

//Muestro resultados
muestroDatos();

//control
console.log(recetaOriginal);
console.log(recetaAdaptada);
console.log(distanciaVertice);
