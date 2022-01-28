//Declaro Variables globales
let ojoACalcular;
let distanciaVertice;

//Contenidos Dinámicos
//Selector de ojo, muestra ingreso de datos de acuerdo a lo seleccionado
var botonOD = document.getElementById("botonOD");
var botonOI = document.getElementById("botonOI");
var botonAO = document.getElementById("botonAO");
var datosOD = document.getElementById("ingresoDatosOd");
var datosOI = document.getElementById("ingresoDatosOi");

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

campoEsfOd.addEventListener("change", () => {
  if (campoEsfOd % 25 != 0){
    campoEsfOd.style.backgroundColor="red";

  } else if (campoEsfOd % 25 == 0){
    campoEsfOd.style.backgroundColor="lightgreen";
  }
})

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