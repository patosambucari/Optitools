//Declaro Variables globales
let ojoACalcular = "ao";
let distanciaVertice;

//Clase Receta
//Se usará para crear todas las recetas utilizadas
class Receta {
  constructor(
    ojo1,
    esfOjo1,
    cilOjo1,
    ejeOjo1,
    ojo2,
    esfOjo2,
    cilOjo2,
    ejeOjo2
  ) {
    this.ojo1 = ojo1;
    this.esfOjo1 = esfOjo1;
    this.cilOjo1 = cilOjo1;
    this.ejeOjo1 = ejeOjo1;
    this.ojo2 = ojo2;
    this.esfOjo2 = esfOjo2;
    this.cilOjo2 = cilOjo2;
    this.ejeOjo2 = ejeOjo2;
  }

  //Metodo para mostrar los datos de las recetas
  //Solo mostrará los ojos calculados, y ajustará todo a 2 decimales
  muestroDatos = () => {
    if (ojoACalcular == "od") {
      return `${this.ojo1.toUpperCase()} ${this.esfOjo1.toFixed(
        2
      )} ${this.cilOjo1.toFixed(2)} x ${this.ejeOjo1}º`;
    } else if (ojoACalcular == "oi") {
      return `${this.ojo2.toUpperCase()} ${this.esfOjo2.toFixed(
        2
      )} ${this.cilOjo2.toFixed(2)} x ${this.ejeOjo2}º`;
    } else {
      return `OD: ${this.esfOjo1.toFixed(2)} ${this.cilOjo1.toFixed(2)} x ${
        this.ejeOjo1
      }º \nOI: ${this.esfOjo2.toFixed(2)} ${this.cilOjo2.toFixed(2)} x ${
        this.ejeOjo2
      }º`;
    }
  }
}

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
  
  const recetaAdaptada = new Receta(
    "OD",
    null,
    null,
    null,
    "OI",
    null,
    null,
    null
  );

//Contenidos Dinámicos
//Selector de ojo, muestra ingreso de datos de acuerdo a lo seleccionado
var botonOD = document.getElementById("botonOD");
var botonOI = document.getElementById("botonOI");
var botonAO = document.getElementById("botonAO");
var datosOD = document.getElementById("ingresoDatosOd");
var datosOI = document.getElementById("ingresoDatosOi");

//Solo muestra el formulario del ojo seleccionado, y oculta el otro
botonOD.addEventListener("click", (event) => {
  event.preventDefault();
  datosOD.style.display = "block";
  datosOI.style.display = "none";
  ojoACalcular="od";
});

botonOI.addEventListener("click", (event) => {
  event.preventDefault();
  datosOD.style.display = "none";
  datosOI.style.display = "block";
  ojoACalcular="oi";
});

//En caso de seleccionar ambos ojos, muestra ambos
botonAO.addEventListener("click", (event) => {
  event.preventDefault();
  datosOD.style.display = "block";
  datosOI.style.display = "block";
  ojoACalcular="ao";
});

//Capturo datos del formulario
let campoEsfOd = document.querySelector("#esfOd");
let campoCilOd = document.querySelector("#cilOd");
let campoEjeOd = document.querySelector("#ejeOd");
let campoEsfOi = document.querySelector("#esfOi");
let campoCilOi = document.querySelector("#cilOi");
let campoEjeOi = document.querySelector("#ejeOi");
let campoDistVertice = document.querySelector("#distanciaVertice");
let subtextoEsfOd = document.querySelector("#subtextoEsfOd");
let subtextoCilOd = document.querySelector("#subtextoCilOd");
let subtextoEjeOd = document.querySelector("#subtextoEjeOd");
let subtextoEsfOi = document.querySelector("#subtextoEsfOi");
let subtextoCilOi = document.querySelector("#subtextoCilOi");
let subtextoEjeOi = document.querySelector("#subtextoEjeOi");
let subtextoDistVertice = document.querySelector("#subtextoDistanciaVertice");
let validOD = false;
let validOI = false;
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
    validOD = false;
  } else if (campoEsfOd.value % 25 == 0){
    campoEsfOd.style.backgroundColor="lightgreen";
    subtextoEsfOd.innerHTML="¡OK!";
    subtextoEsfOd.style.color="darkgreen";
    validOD = true;
  } 
})

//campoCilOd
campoCilOd.addEventListener("keyup", () => {
  if (campoCilOd.value % 25 != 0 || campoCilOd.value < -3000 || campoCilOd.value > 3000){
    campoCilOd.style.backgroundColor="red";
    subtextoCilOd.innerHTML="Verifique la graduación ingresada";
    subtextoCilOd.style.color="red";
    validOD = false;
  } else if (campoCilOd.value % 25 == 0){
    campoCilOd.style.backgroundColor="lightgreen";
    subtextoCilOd.innerHTML="¡OK!";
    subtextoCilOd.style.color="darkgreen";
    validOD = true;
  } 
})

//campoEsfOi
campoEsfOi.addEventListener("keyup", () => {
  if (campoEsfOi.value % 25 != 0 || campoEsfOi.value < -3000 || campoEsfOi.value > 3000){
    campoEsfOi.style.backgroundColor="red";
    subtextoEsfOi.innerHTML="Verifique la graduación ingresada";
    subtextoEsfOi.style.color="red";
    validOI = false;
  } else if (campoEsfOi.value % 25 == 0){
    campoEsfOi.style.backgroundColor="lightgreen";
    subtextoEsfOi.innerHTML="¡OK!";
    subtextoEsfOi.style.color="darkgreen";
    validOI = true;
  } 
})

//campoCilOi
campoCilOi.addEventListener("keyup", () => {
  if (campoCilOi.value % 25 != 0 || campoCilOi.value < -3000 || campoCilOi.value > 3000){
    campoCilOi.style.backgroundColor="red";
    subtextoCilOi.innerHTML="Verifique la graduación ingresada";
    subtextoCilOi.style.color="red";
    validOI = false;
  } else if (campoCilOi.value % 25 == 0){
    campoCilOi.style.backgroundColor="lightgreen";
    subtextoCilOi.innerHTML="¡OK!";
    subtextoCilOi.style.color="darkgreen";
    validOI = true;
  } 
})

//Validacion campos EJES
//EjeOD
campoEjeOd.addEventListener("keyup", () => {
  if (campoEjeOd.value < 0 || campoEjeOd.value > 180){
    campoEjeOd.style.backgroundColor="red";
    subtextoEjeOd.innerHTML="Ingrese un eje válido (entre 0 y 180)";
    subtextoEjeOd.style.color="red";
    validOD = false;
  } else{
    campoEjeOd.style.backgroundColor="lightgreen";
    subtextoEjeOd.innerHTML="¡OK!";
    subtextoEjeOd.style.color="darkgreen";
    validOD = true;
  } 
})

//EjeOI
campoEjeOi.addEventListener("keyup", () => {
  if (campoEjeOi.value < 0 || campoEjeOi.value > 180){
    campoEjeOi.style.backgroundColor="red";
    subtextoEjeOi.innerHTML="Ingrese un eje válido (entre 0 y 180)";
    subtextoEjeOi.style.color="red";
    validOI = false;
  } else{
    campoEjeOi.style.backgroundColor="lightgreen";
    subtextoEjeOi.innerHTML="¡OK!";
    subtextoEjeOi.style.color="darkgreen";
    validOI = true;
  } 
})

// Validacion campo Distancia al Vertice
campoDistVertice.addEventListener("keyup", () => {
  if (campoDistVertice.value < 13 || campoDistVertice.value > 17){
    campoDistVertice.style.backgroundColor="red";
    subtextoDistVertice.innerHTML="Ingrese una distancia válida (entre 13 y 17)";
    subtextoDistVertice.style.color="red";
  } else{
    campoDistVertice.style.backgroundColor="lightgreen";
    subtextoDistVertice.innerHTML="¡OK!";
    subtextoDistVertice.style.color="darkgreen";
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
  distanciaVertice = Number(campoDistVertice.value);
};

//------VALIDACIONES EN ENVIO------
//Validacion campos vacios
const validoCamposVacios = () => {
  if (campoEsfOd.value == "" || campoCilOd.value == "" || campoEjeOd.value == ""){
      validOD = false;
  } else validOD = true;  
  if (campoEsfOi.value == "" || campoCilOi.value == null || campoEjeOi.value == ""){
      validOI = false;
  } else validOI = true;
}

//Validacion segun ojo a completar
const validacionSegunOjo = () => {
if ((ojoACalcular == "od" || ojoACalcular == "ao") && validOD == false){
      mensajeErrorValidacion.innerHTML="&#9888 Todos los campos deben estar completos &#9888";
    } else if ((ojoACalcular == "oi" || ojoACalcular == "ao") && validOI == false){
      mensajeErrorValidacion.innerHTML="&#9888 Todos los campos deben estar completos &#9888";
    } else {
      mensajeErrorValidacion.innerHTML="";
      ingresoDatosReceta();
      formIngresoReceta.style.display="none";
      runDistometria();
      console.table(recetaOriginal); //para prueba
    }
}

//DECLARO FUNCION -- Redondear a cuartos (las graduaciones van de 0.25 en 0.25)
//Funcion para redondear los resultados obtenidos a cuartos (multiplos de 0.25)
const redondearACuartos = (num) => {
  num *= 4;
  num = Math.round(num) / 4;
  return num;
};

/*DECLARO FUNCION -- Calcular Distometria
Se calcula distometría entera según la formula DC = D / (1-xD)
DC = Receta adaptada a Lentes de Contacto
D = Receta de lentes aereos
x = Distancia al vértice (en metros)
*/
const distometria = () => {
  if (ojoACalcular == "od" || ojoACalcular == "ao") {
    recetaAdaptada.esfOjo1 = redondearACuartos(
      Math.round(
        (parseFloat(recetaOriginal.esfOjo1) /
          (1 -
            (parseFloat(distanciaVertice) / 1000) *
              parseFloat(recetaOriginal.esfOjo1))) *
          100
      ) / 100
    );
    recetaAdaptada.cilOjo1 = redondearACuartos(
      Math.round(
        (parseFloat(recetaOriginal.cilOjo1) /
          (1 -
            (parseFloat(distanciaVertice) / 1000) *
              parseFloat(recetaOriginal.cilOjo1))) *
          100
      ) / 100
    );
    recetaAdaptada.ejeOjo1 = recetaOriginal.ejeOjo1;
  }
  if (ojoACalcular == "oi" || ojoACalcular == "ao") {
    recetaAdaptada.esfOjo2 = redondearACuartos(
      Math.round(
        (parseFloat(recetaOriginal.esfOjo2) /
          (1 -
            (parseFloat(distanciaVertice) / 1000) *
              parseFloat(recetaOriginal.esfOjo2))) *
          100
      ) / 100
    );
    recetaAdaptada.cilOjo2 = redondearACuartos(
      Math.round(
        (parseFloat(recetaOriginal.cilOjo2) /
          (1 -
            (parseFloat(distanciaVertice) / 1000) *
              parseFloat(recetaOriginal.cilOjo2))) *
          100
      ) / 100
    );
    recetaAdaptada.ejeOjo2 = recetaOriginal.ejeOjo2;
  }
  //Almaceno en local storage las recetas
  localStorage.setItem("recetaOriginal", JSON.stringify(recetaOriginal));
  localStorage.setItem("recetaAdaptada", JSON.stringify(recetaAdaptada));
};


//DECLARO FUNCION -- Llama a las funciones necesarias para ejecutar
const runDistometria = () => {
  
  //Calculo distometria sobre receta original
  distometria();

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

  const agregoElementoRecetaNueva = () => {
    const nuevoH3Resultado = document.createElement("h3");
    const nuevoH4Resultado = document.createElement("h4");
    const tituloRecetaAdaptada = document.createTextNode(`La receta adaptada a LC para una distancia al vertice de ${distanciaVertice} es:`);
    const datosRecetaAdaptada = document.createTextNode(`${recetaAdaptada.muestroDatos()}`);
    nuevoH3Resultado.appendChild(tituloRecetaAdaptada);
    nuevoH4Resultado.appendChild(datosRecetaAdaptada);
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
  agregoElementoRecetaNueva();
  agregoBotonesFinal();

}

//Accion boton PROCESAR
botonProcesar.addEventListener("click", (event) => {
  event.preventDefault();
  validoCamposVacios();
  validacionSegunOjo();  
});
