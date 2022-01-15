//Función para mostrar datos
const muestroDatos = () => {
    if (ojoACalcular == "od"){
        alert(`${ojoACalcular.toUpperCase()} ${recetaOriginal.esfOjo1/100} ${recetaOriginal.cilOjo1/100} x ${recetaOriginal.ejeOjo1}º`);
    } else if (ojoACalcular == "oi"){
        alert(`${ojoACalcular.toUpperCase()} ${recetaOriginal.esfOjo2/100} ${recetaOriginal.cilOjo2/100} x ${recetaOriginal.ejeOjo2}º`);
    } else {
        alert(`OD: ${recetaOriginal.esfOjo1/100} ${recetaOriginal.cilOjo1/100} x ${recetaOriginal.ejeOjo1}º
        OI: ${recetaOriginal.esfOjo2/100} ${recetaOriginal.cilOjo2/100} x ${recetaOriginal.ejeOjo2}º`);
    }
}




const muestroDatos = () => {
    if (ojoACalcular == "od"){
        alert(`La receta adaptada a LC con una distancia al vertice de ${distanciaVertice} es: 
        ${ojoACalcular.toUpperCase()} ${recetaAdaptada.esfOjo1} ${recetaAdaptada.cilOjo1} x ${recetaAdaptada.ejeOjo1}º`);
    } else if (ojoACalcular == "oi"){
        alert(`La receta adaptada a LC con una distancia al vertice de ${distanciaVertice} es: 
        ${ojoACalcular.toUpperCase()} ${recetaAdaptada.esfOjo2} ${recetaAdaptada.cilOjo2} x ${recetaAdaptada.ejeOjo2}º`);
    } else {
        alert(`La receta adaptada a LC con una distancia al vertice de ${distanciaVertice} es: 
        OD: ${recetaAdaptada.esfOjo1} ${recetaAdaptada.cilOjo1} x ${recetaAdaptada.ejeOjo1}º;
        OI: ${recetaAdaptada.esfOjo2} ${recetaAdaptada.cilOjo2} x ${recetaAdaptada.ejeOjo2}º`);
    }
}



/*
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
muestroDatos();*/



//Creo nuevo objeto Receta con las graduaciones originales
const recetaOriginal = new Receta ("OD", esfOjo1, cilOjo1, ejeOjo1, "OI", esfOjo2, cilOjo2, ejeOjo2);


