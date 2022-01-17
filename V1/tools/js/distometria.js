//Declaro Variables globales
let ojoACalcular;
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
  };
}

//DECLARO FUNCION -- Ingresar y validar ojo a calcular
//Valida que solo se pueda ingresar OD, OI o AO
//De lo contrario, no permite avanzar
const validaOjo = () => {
  ojoACalcular = prompt(
    "¿La receta es para Ojo Derecho, Ojo Izquierdo o Ambos Ojos? Ingrese OD, OI o AO"
  ).toLowerCase();
  while (ojoACalcular != "od" && ojoACalcular != "oi" && ojoACalcular != "ao") {
    ojoACalcular = prompt("Debe ingresar OD, OI o AO").toLowerCase();
  }
};

//DECLARO FUNCION -- Validar cualquier graduacion ingresada
//Valida que las graduaciones sean correctas (multiplos de 25)
//De lo contrario, no permite avanzar
const validoGraduacion = (graduacionIngresada) => {
  while (graduacionIngresada % 25 != 0) {
    graduacionIngresada = Number(
      prompt("Por favor, ingrese correctamente la graduación")
    );
  }
  return graduacionIngresada;
};

//DECLARO FUNCION -- Validar ejes
//Valida que los ejes ingresados sean correctos (entre 0 y 180)
//De lo contrario, no permite avanzar
const validoEje = (ejeIngresado) => {
  while (ejeIngresado < 0 || ejeIngresado > 180) {
    ejeIngresado = Number(prompt("El eje debe ser un valor entre 0 y 180"));
  }
  return ejeIngresado;
};

//DECLARO FUNCION -- Validar distancia al vertice
//Valida que la distancia al vertice ingresada sea correcta (entre 13 y 17)
//De lo contrario, no permite avanzar
const validoDistancia = (distanciaIngresada) => {
  while (distanciaIngresada < 13 || distanciaIngresada > 17) {
    distanciaIngresada = Number(
      prompt("La distancia al vértice debe ser entre 13 mm y 17 mm")
    );
  }
  return distanciaIngresada;
};

//DECLARO FUNCION -- Ingreso de datos a la receta original
//El usuario ingresará los datos de la receta de anteojos con la que cuenta
const ingresoDatosReceta = () => {
  if (ojoACalcular == "od" || ojoACalcular == "ao") {
    let paramGraduacion1 = Number(
      prompt(`Ingrese graduación esférica para el OD (sin puntuación)`)
    );
    recetaOriginal.esfOjo1 = validoGraduacion(paramGraduacion1) / 100;
    let paramGraduacion2 = Number(
      prompt(`Ingrese graduación cilíndrica para el OD (sin puntuación)`)
    );
    recetaOriginal.cilOjo1 = validoGraduacion(paramGraduacion2) / 100;
    let paramEje = Number(prompt(`Ingrese el eje para el OD`));
    recetaOriginal.ejeOjo1 = validoEje(paramEje);
  }
  if (ojoACalcular == "oi" || ojoACalcular == "ao") {
    let paramGraduacion3 = Number(
      prompt(`Ingrese graduación esférica para el OI (sin puntuación)`)
    );
    recetaOriginal.esfOjo2 = validoGraduacion(paramGraduacion3) / 100;
    let paramGraduacion4 = Number(
      prompt(`Ingrese graduación cilíndrica para el OI (sin puntuación)`)
    );
    recetaOriginal.cilOjo2 = validoGraduacion(paramGraduacion4) / 100;
    let paramEje2 = Number(prompt(`Ingrese el eje para el OI`));
    recetaOriginal.ejeOjo2 = validoEje(paramEje2);
  }
  let paramDistancia = Number(prompt(`Ingrese la distancia al vertice`));
  distanciaVertice = validoDistancia(paramDistancia);
};

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
};

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

//DECLARO FUNCION -- Llama a las funciones necesarias para ejecutar
const runDistometria = () => {
  
  //Llamo funcion para ingresar ojo a calcular
  validaOjo();

  //Llamo Funcion para ingresar datos originales
  ingresoDatosReceta();

  //Calculo distometria sobre receta original
  distometria();

  //Muestro Datos
  alert(`La receta original ingresada es: 
${recetaOriginal.muestroDatos()}`);
  alert(`La receta adaptada a LC para una distancia al vertice de ${distanciaVertice} es: 
${recetaAdaptada.muestroDatos()}`);
};

//LLAMO FUNCION - Ejecuta funcionalidad
runDistometria();