//Declaro Variables globales
let ojoACalcular = "ao";

//VER COMO OBTENER EL VALOR DEL MENU SELECT
$("#adicionSelect").on("change", ()=> {
  console.log($("#adicionSelect").val());
});

 //Creo instancias Receta Original y adaptada
  const recetaOriginal = new Receta(
    "OD",
    null,
    null,
    null,
    "OI",
    null,
    null,
    null
  );
  
  const recetaCerca = new Receta(
    "OD",
    null,
    null,
    null,
    "OI",
    null,
    null,
    null
  );

//Cambia metodo de calculo segun el switch
let calcularAdicion = false;
$(".graduacionCerca").hide();
$("#calculaAdd").on("change", ()=> {
  if (calcularAdicion == false){
    calcularAdicion = true;
    $("#adicion").slideUp(500);
    $(".graduacionCerca").slideDown(500);
  } else if (calcularAdicion == true){
    calcularAdicion = false;
    $("#adicion").slideDown(500);
    $(".graduacionCerca").slideUp(500);
  }
})


//CONTENIDOS DINAMICOS
//Selector de ojo, muestra ingreso de datos de acuerdo a lo seleccionado
var botonOD = document.getElementById("botonOD");
var botonOI = document.getElementById("botonOI");
var botonAO = document.getElementById("botonAO");
var datosOD = document.getElementById("ingresoDatosOd");
var datosOI = document.getElementById("ingresoDatosOi");

//Solo muestra el formulario del ojo seleccionado, y oculta el otro
botonOD.addEventListener("click", (event) => {
  event.preventDefault();
  $("#ingresoDatosOd").fadeIn(500);
  $("#ingresoDatosOi").fadeOut(500);
  ojoACalcular="od";
});

botonOI.addEventListener("click", (event) => {
  event.preventDefault();
  $("#ingresoDatosOd").fadeOut(500);
  $("#ingresoDatosOi").fadeIn(500);
  ojoACalcular="oi";
});

//En caso de seleccionar ambos ojos, muestra ambos
botonAO.addEventListener("click", (event) => {
  event.preventDefault();
  $("#ingresoDatosOd").fadeIn(500);
  $("#ingresoDatosOi").fadeIn(500);
  ojoACalcular="ao";
});

//Capturo datos del formulario
let campoEsfOd = document.querySelector("#esfOd");
let campoEsfOdCerca = document.querySelector("#esfOdCerca");
let campoCilOd = document.querySelector("#cilOd");
let campoEjeOd = document.querySelector("#ejeOd");
let campoEsfOi = document.querySelector("#esfOi");
let campoEsfOiCerca = document.querySelector("#esfOiCerca");
let campoCilOi = document.querySelector("#cilOi");
let campoEjeOi = document.querySelector("#ejeOi");
let campoDistVertice = document.querySelector("#distanciaVertice");
let subtextoEsfOd = document.querySelector("#subtextoEsfOd");
let subtextoEsfOdCerca = document.querySelector("#subtextoEsfOdCerca");
let subtextoCilOd = document.querySelector("#subtextoCilOd");
let subtextoEjeOd = document.querySelector("#subtextoEjeOd");
let subtextoEsfOi = document.querySelector("#subtextoEsfOi");
let subtextoEsfOiCerca = document.querySelector("#subtextoEsfOiCerca");
let subtextoCilOi = document.querySelector("#subtextoCilOi");
let subtextoEjeOi = document.querySelector("#subtextoEjeOi");
let subtextoDistVertice = document.querySelector("#subtextoDistanciaVertice");
let validEsfOD = false;
let validEsfODCerca = false;
let validCilOD = false;
let validEjeOD = false;
let validEsfOI = false;
let validEsfOICerca = false;
let validCilOI = false;
let validEjeOI = false;
let validVaciosOD = false;
let validVaciosOI = false;
let validOD = false;
let validOI = false;
let validDistVertice = true;
let botonProcesar = document.getElementById("botonProcesar");
let mensajeErrorValidacion = document.querySelector("#subtextoValidacion");
let formIngresoReceta = document.getElementById("ingresoReceta");

//------INICIO VALIDACIONES EN CAMBIOS------
//Validacion de campos GRADUACION
//¿Hay forma de hacer esto una sola vez y aplicarlo a todos los campos del mismo tipo?
//campoEsfOd
campoEsfOd.addEventListener("keyup", () => {
  if (campoEsfOd.value % 25 != 0 || campoEsfOd.value < -3000 || campoEsfOd.value > 3000){
    campoEsfOd.style.backgroundColor="red";
    subtextoEsfOd.innerHTML="Verifique la graduación ingresada";
    subtextoEsfOd.style.color="red";
    validEsfOD = false;
  } else if (campoEsfOd.value % 25 == 0){
    campoEsfOd.style.backgroundColor="lightgreen";
    subtextoEsfOd.innerHTML="¡OK!";
    subtextoEsfOd.style.color="darkgreen";
    validEsfOD = true;
  }
})

//campoEsfOdCerca
campoEsfOdCerca.addEventListener("keyup", () => {
  if (campoEsfOdCerca.value % 25 != 0 || campoEsfOdCerca.value < campoEsfOd.value){
    campoEsfOdCerca.style.backgroundColor="red";
    subtextoEsfOdCerca.innerHTML="Verifique la graduación ingresada";
    subtextoEsfOdCerca.style.color="red";
    validEsfODCerca = false;
  } else if (campoEsfOdCerca.value % 25 == 0 && campoEsfOdCerca.value > campoEsfOd.value){
    campoEsfOdCerca.style.backgroundColor="lightgreen";
    subtextoEsfOdCerca.innerHTML="¡OK!";
    subtextoEsfOdCerca.style.color="darkgreen";
    validEsfODCerca = true;
  } 
})

//campoCilOd
campoCilOd.addEventListener("keyup", () => {
  if (campoCilOd.value % 25 != 0 || campoCilOd.value < -3000 || campoCilOd.value > 3000){
    campoCilOd.style.backgroundColor="red";
    subtextoCilOd.innerHTML="Verifique la graduación ingresada";
    subtextoCilOd.style.color="red";
    validCilOD = false;
  } else if (campoCilOd.value % 25 == 0){
    campoCilOd.style.backgroundColor="lightgreen";
    subtextoCilOd.innerHTML="¡OK!";
    subtextoCilOd.style.color="darkgreen";
    validCilOD = true;
  } 
})

//campoEsfOi
campoEsfOi.addEventListener("keyup", () => {
  if (campoEsfOi.value % 25 != 0 || campoEsfOi.value < -3000 || campoEsfOi.value > 3000){
    campoEsfOi.style.backgroundColor="red";
    subtextoEsfOi.innerHTML="Verifique la graduación ingresada";
    subtextoEsfOi.style.color="red";
    validEsfOI = false;
  } else if (campoEsfOi.value % 25 == 0){
    campoEsfOi.style.backgroundColor="lightgreen";
    subtextoEsfOi.innerHTML="¡OK!";
    subtextoEsfOi.style.color="darkgreen";
    validEsfOI = true;
  } 
})

//campoEsfOiCerca
campoEsfOiCerca.addEventListener("keyup", () => {
  if (campoEsfOiCerca.value % 25 != 0 || campoEsfOiCerca.value < campoEsfOi.value){
    campoEsfOiCerca.style.backgroundColor="red";
    subtextoEsfOiCerca.innerHTML="Verifique la graduación ingresada";
    subtextoEsfOiCerca.style.color="red";
    validEsfOICerca = false;
  } else if (campoEsfOiCerca.value % 25 == 0 && campoEsfOiCerca.value > campoEsfOi.value){
    campoEsfOiCerca.style.backgroundColor="lightgreen";
    subtextoEsfOiCerca.innerHTML="¡OK!";
    subtextoEsfOiCerca.style.color="darkgreen";
    validEsfOICerca = true;
  } 
})

//campoCilOi
campoCilOi.addEventListener("keyup", () => {
  if (campoCilOi.value % 25 != 0 || campoCilOi.value < -3000 || campoCilOi.value > 3000){
    campoCilOi.style.backgroundColor="red";
    subtextoCilOi.innerHTML="Verifique la graduación ingresada";
    subtextoCilOi.style.color="red";
    validCilOI = false;
  } else if (campoCilOi.value % 25 == 0){
    campoCilOi.style.backgroundColor="lightgreen";
    subtextoCilOi.innerHTML="¡OK!";
    subtextoCilOi.style.color="darkgreen";
    validCilOI = true;
  } 
})

//Validacion campos EJES
//EjeOD
campoEjeOd.addEventListener("keyup", () => {
  if (campoEjeOd.value < 0 || campoEjeOd.value > 180){
    campoEjeOd.style.backgroundColor="red";
    subtextoEjeOd.innerHTML="Ingrese un eje válido (entre 0 y 180)";
    subtextoEjeOd.style.color="red";
    validEjeOD = false;
  } else{
    campoEjeOd.style.backgroundColor="lightgreen";
    subtextoEjeOd.innerHTML="¡OK!";
    subtextoEjeOd.style.color="darkgreen";
    validEjeOD = true;
  } 
})

//EjeOI
campoEjeOi.addEventListener("keyup", () => {
  if (campoEjeOi.value < 0 || campoEjeOi.value > 180){
    campoEjeOi.style.backgroundColor="red";
    subtextoEjeOi.innerHTML="Ingrese un eje válido (entre 0 y 180)";
    subtextoEjeOi.style.color="red";
    validEjeOI = false;
  } else{
    campoEjeOi.style.backgroundColor="lightgreen";
    subtextoEjeOi.innerHTML="¡OK!";
    subtextoEjeOi.style.color="darkgreen";
    validEjeOI = true;
  } 
})

//------FIN VALIDACIONES EN CAMBIOS------


//DECLARO FUNCION -- Ingreso de datos a la receta original
//El usuario ingresará los datos de la receta de anteojos con la que cuenta
const ingresoDatosReceta = () => {
  if (ojoACalcular == "od" || ojoACalcular == "ao") {
    recetaOriginal.esfOjo1 = Number(campoEsfOd.value)/100;
    recetaOriginal.cilOjo1 = Number(campoCilOd.value)/100;
    recetaOriginal.ejeOjo1 = Number(campoEjeOd.value);
  }
  if (ojoACalcular == "oi" || ojoACalcular == "ao") {
    recetaOriginal.esfOjo2 = Number(campoEsfOi.value)/100;
    recetaOriginal.cilOjo2 = Number(campoCilOi.value)/100;
    recetaOriginal.ejeOjo2 = Number(campoEjeOi.value);
  }
};

//------VALIDACIONES EN ENVIO------
//Validacion campos vacios
const validoCamposVacios = () => {
  if (campoEsfOdCerca.value == "" || campoEsfOd.value == "" || campoCilOd.value == "" || campoEjeOd.value == ""){
      validVaciosOD = false;
  } else validVaciosOD = true;  
  if (campoEsfOiCerca.value == "" || campoEsfOi.value == "" || campoCilOi.value == null || campoEjeOi.value == ""){
      validVaciosOI = false;
  } else validVaciosOI = true;
}

//VALIDACION SEGUN OJO A COMPLETAR
const validacionSegunOjo = (funcionAEjecutar) => {
//Valido que todos los campos del OD tengan datos correctos
if (validEsfODCerca && validEsfOD && validCilOD && validEjeOD) {
  validOD = true;
}
//Valido que todos los campos del OI tengan datos correctos
if (validEsfOICerca && validEsfOI && validCilOI && validEjeOI) {
  validOI = true;
}

//Valido que, cuando se pida OD o AO, el OD tenga todos los datos completos y correctos
if (ojoACalcular == "od" || ojoACalcular == "ao"){
  if (validVaciosOD == false) {
    mensajeErrorValidacion.innerHTML="&#9888 Todos los campos deben estar completos &#9888";
  } else if (validOD == false){
    mensajeErrorValidacion.innerHTML="&#9888 Hay datos incorrectos &#9888";
  }
}

//Valido que, cuando se pida OI o AO, el OI tenga todos los datos completos y correctos
if (ojoACalcular == "oi" || ojoACalcular == "ao"){
  if (validVaciosOI == false) {
    mensajeErrorValidacion.innerHTML="&#9888 Todos los campos deben estar completos &#9888";
  } else if (validOI == false){
    mensajeErrorValidacion.innerHTML="&#9888 Hay datos incorrectos &#9888";
  }
}


if (
  ((ojoACalcular == "od") && validOD && validVaciosOD)
  ||
  ((ojoACalcular == "oi") && validOI && validVaciosOI)
  ||
  ((ojoACalcular == "ao") && validOD && validVaciosOD && validOI && validVaciosOI)) {
    if (validDistVertice){
      mensajeErrorValidacion.innerHTML="";
      ingresoDatosReceta();
      $("#ingresoReceta").slideUp(1000);
      if (funcionAEjecutar == "RecetaCerca"){
        runCalcularRecetaCerca();
      } else if (funcionAEjecutar == "Adicion"){
        runcalcularAdicionSobreRecetas();
      }
    } 
}
}


//DECLARO FUNCION -- Redondear a cuartos (las graduaciones van de 0.25 en 0.25)
//Funcion para redondear los resultados obtenidos a cuartos (multiplos de 0.25)
const redondearACuartos = (num) => {
  num *= 4;
  num = Math.round(num) / 4;
  return num;
};

/*DECLARO FUNCION -- Calcular Receta Cerca
Nuevo ESF: Esferico original + Adicion
Nuevo CIL: Cilindrico original
Nuevo EJE: Eje original
*/
const calcularRecetaCerca = () => {
  if (ojoACalcular == "od" || ojoACalcular == "ao") {
    recetaCerca.esfOjo1 = redondearACuartos(
      Math.round(
        (parseFloat(recetaOriginal.esfOjo1) +
              parseFloat($("#adicionSelect").val())) *
          100
      ) / 100
    );
    recetaCerca.cilOjo1 = redondearACuartos(
      Math.round(
        (parseFloat(recetaOriginal.cilOjo1)) *
          100
      ) / 100
    );
    recetaCerca.ejeOjo1 = recetaOriginal.ejeOjo1;
  }
  if (ojoACalcular == "oi" || ojoACalcular == "ao") {
    recetaCerca.esfOjo2 = redondearACuartos(
      Math.round(
        (parseFloat(recetaOriginal.esfOjo2) +
              parseFloat($("#adicionSelect").val())) *
          100
      ) / 100
    );
    recetaCerca.cilOjo2 = redondearACuartos(
      Math.round(
        (parseFloat(recetaOriginal.cilOjo2)) *
          100
      ) / 100
    );
    recetaCerca.ejeOjo2 = recetaOriginal.ejeOjo2;
  }
};


//DECLARO FUNCION -- Llama a las funciones necesarias para calcular CERCA
const runCalcularRecetaCerca = () => {
  
  //Calculo receta de CERCA en base a receta original y adicion
  calcularRecetaCerca();

  //Agrego elementos para mostrar datos
  const agregoElementoRecetaOriginal = () => {
    const nuevoH3 = document.createElement("h3");
    const nuevoH4 = document.createElement("h4");
    const tituloRecetaOriginal = document.createTextNode(`La receta original ingresada es:\n`);
    const datosRecetaOriginal = document.createTextNode(`${recetaOriginal.muestroDatos()}`);
    nuevoH3.appendChild(tituloRecetaOriginal);
    nuevoH4.appendChild(datosRecetaOriginal);
    let divActual = document.getElementById("resultados");
    divActual.appendChild(nuevoH3);
    divActual.appendChild(nuevoH4);
  }

  const agregoElementoRecetaCerca = () => {
    const nuevoH3Resultado = document.createElement("h3");
    const nuevoH4Resultado = document.createElement("h4");
    const tituloRecetaCerca = document.createTextNode(`La receta para vision CERCANA con Add. ${$("#adicionSelect").val()} es:`);
    const datosRecetaCerca = document.createTextNode(`${recetaCerca.muestroDatos()}`);
    nuevoH3Resultado.appendChild(tituloRecetaCerca);
    nuevoH4Resultado.appendChild(datosRecetaCerca);
    let divActual = document.getElementById("resultados");
    divActual.appendChild(nuevoH3Resultado);
    divActual.appendChild(nuevoH4Resultado);
  }

  const agregoBotonesFinal = () => {
    const botonNuevoCalculo =document.createElement("button");
    botonNuevoCalculo.innerText="NUEVA RECETA";
    botonNuevoCalculo.className="main-button";
    let divActual = document.getElementById("resultados");
    divActual.appendChild(botonNuevoCalculo);
    botonNuevoCalculo.addEventListener("click", ()=> {
      window.location.reload()
    });
    const botonCerrarVentana =document.createElement("button");
    botonCerrarVentana.innerText="CERRAR VENTANA";
    botonCerrarVentana.className="main-button";
    divActual.appendChild(botonCerrarVentana);
    botonCerrarVentana.addEventListener("click", ()=> {
      window.close()
    });

  }

  agregoElementoRecetaOriginal();
  agregoElementoRecetaCerca();
  agregoBotonesFinal();

}


/*DECLARO FUNCION -- Calcular Adicion
Adicion: Esferico Cerca - Esferico Lejos
*/
const calcularAdicionSobreRecetas = () => {
  if (ojoACalcular == "od" || ojoACalcular == "ao") {
    recetaCerca.esfOjo1 = redondearACuartos(
      Math.round(
        (parseFloat(campoEsfOdCerca.value/100)) *
          100
      ) / 100
    );
    recetaCerca.cilOjo1 = redondearACuartos(
      Math.round(
        (parseFloat(recetaOriginal.cilOjo1)) *
          100
      ) / 100
    );
    recetaCerca.ejeOjo1 = recetaOriginal.ejeOjo1;
  }
  if (ojoACalcular == "oi" || ojoACalcular == "ao") {
    recetaCerca.esfOjo2 = redondearACuartos(
      Math.round(
        (parseFloat(campoEsfOiCerca.value/100)) *
          100
      ) / 100
    );
    recetaCerca.cilOjo2 = redondearACuartos(
      Math.round(
        (parseFloat(recetaOriginal.cilOjo2)) *
          100
      ) / 100
    );
    recetaCerca.ejeOjo2 = recetaOriginal.ejeOjo2;
  }
};


//DECLARO FUNCION -- Llama a las funciones necesarias para calcular ADICION
const runcalcularAdicionSobreRecetas = () => {
  
  //Calculo ADICION sobre recetas originales
  calcularAdicionSobreRecetas();

  //Agrego elementos para mostrar datos
  const agregoElementoRecetaOriginal = () => {
    const nuevoH3 = document.createElement("h3");
    const nuevoH4 = document.createElement("h4");
    const tituloRecetaOriginal = document.createTextNode(`La receta original ingresada es:\n`);
    const datosRecetaOriginal = document.createTextNode(`${recetaOriginal.muestroDatos()}`);
    nuevoH3.appendChild(tituloRecetaOriginal);
    nuevoH4.appendChild(datosRecetaOriginal);
    let divActual = document.getElementById("resultados");
    divActual.appendChild(nuevoH3);
    divActual.appendChild(nuevoH4);
  }

  const agregoElementoRecetaCerca = () => {
    const nuevoH3Resultado = document.createElement("h3");
    const nuevoH4Resultado = document.createElement("h4");
    const tituloRecetaCerca = document.createTextNode(`La receta para vision CERCANA es:`);
    const datosRecetaCerca = document.createTextNode(`${recetaCerca.muestroDatos()}`);
    nuevoH3Resultado.appendChild(tituloRecetaCerca);
    nuevoH4Resultado.appendChild(datosRecetaCerca);
    let divActual = document.getElementById("resultados");
    divActual.appendChild(nuevoH3Resultado);
    divActual.appendChild(nuevoH4Resultado);
  }

  const agregoElementoVerAdicion = () => {
    const nuevoH3ResultadoOd = document.createElement("h3");
    const nuevoH3ResultadoOi = document.createElement("h3");
    const tituloAddOd = document.createTextNode(`La ADICIÓN para el OD es: ${recetaOriginal.addSign((recetaCerca.esfOjo1-recetaOriginal.esfOjo1).toFixed(2))}`);
    const tituloAddOi = document.createTextNode(`La ADICIÓN para el OI es: ${recetaOriginal.addSign((recetaCerca.esfOjo2-recetaOriginal.esfOjo2).toFixed(2))}`);
    nuevoH3ResultadoOd.appendChild(tituloAddOd);
    nuevoH3ResultadoOi.appendChild(tituloAddOi);
    let divActual = document.getElementById("resultados");
    divActual.appendChild(nuevoH3ResultadoOd);
    divActual.appendChild(nuevoH3ResultadoOi);
  }

  const agregoBotonesFinal = () => {
    const botonNuevoCalculo =document.createElement("button");
    botonNuevoCalculo.innerText="NUEVA RECETA";
    botonNuevoCalculo.className="main-button";
    let divActual = document.getElementById("resultados");
    divActual.appendChild(botonNuevoCalculo);
    botonNuevoCalculo.addEventListener("click", ()=> {
      window.location.reload()
    });
    const botonCerrarVentana =document.createElement("button");
    botonCerrarVentana.innerText="CERRAR VENTANA";
    botonCerrarVentana.className="main-button";
    divActual.appendChild(botonCerrarVentana);
    botonCerrarVentana.addEventListener("click", ()=> {
      window.close()
    });

  }

  agregoElementoRecetaOriginal();
  agregoElementoRecetaCerca();
  agregoElementoVerAdicion();
  agregoBotonesFinal();

}

//Accion boton PROCESAR
botonProcesar.addEventListener("click", (event) => {
  if (calcularAdicion == false){
    //Ver lo que tiene que hacer al clickear en PROCESAR
    event.preventDefault();
    campoEsfOdCerca = "000";
    campoEsfOiCerca = "000";
    validEsfODCerca = true;
    validEsfOICerca = true;
    validoCamposVacios();
    validacionSegunOjo("RecetaCerca");  
  } else if (calcularAdicion == true) {
    event.preventDefault();
    validoCamposVacios();
    validacionSegunOjo("Adicion");
  }
});

//VER PRESENTACION DE LOS DATOS
//VER VALIDACIONES (AGREGAR O CONTROLAR)