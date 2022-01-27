var botonOD = document.getElementById("botonOD");
var botonOI = document.getElementById("botonOI");
var botonAO = document.getElementById("botonAO");
var datosOD = document.getElementById("ingresoDatosOD");
var datosOI = document.getElementById("ingresoDatosOI");

console.log(botonOD);
console.log(botonOI);
console.log(botonAO);
console.log(datosOD);
console.log(datosOI);

botonOD.addEventListener("click", (event) => {
  event.preventDefault();
  datosOD.style.display = "block";
  datosOI.style.display = "none";
});

botonOI.addEventListener("click", (event) => {
  event.preventDefault();
  datosOD.style.display = "none";
  datosOI.style.display = "block";
});

botonAO.addEventListener("click", (event) => {
  event.preventDefault();
  datosOD.style.display = "block";
  datosOI.style.display = "block";
});
