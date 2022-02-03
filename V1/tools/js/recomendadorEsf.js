//CapturoElementos
let divSelectores = document.querySelector("#selectores");
let divNuevaReceta = document.querySelector("#nuevaReceta");
let divRecetaGuardada = document.querySelector("#recetaGuardada");
let divNuevaAdaptacion = document.querySelector("#nuevaAdaptacion");


//Oculto opcion RECETA GUARDADA si no existe alguna previamente calculada
document.addEventListener("DOMContentLoaded", ()=>{
  if(localStorage.getItem("recetaAdaptada") === null){
    divRecetaGuardada.style.display="none";
  } else {
    divRecetaGuardada.style.display="block";
  }
})

//Refresco la pagina si se actualiza el local storage
window.addEventListener("storage", ()=> {
  window.location.reload();
})

//Creo objeto Recepta Adaptada con la información del Local Storage
//VER DE DONDE VIENE RECETA ADAPTADA
//recetaAdaptada=new Receta(JSON.parse(localStorage.getItem("recetaAdaptada")));
recetaAdaptada = JSON.parse(localStorage.getItem("recetaAdaptada")); 
//console.log(localStorage.getItem("recetaAdaptada"));
console.log(recetaAdaptada);

//Clase Graduacion Esferica
//Para crear objetos "graduación" que estarán contenids en el array de graduaciones disponibles
class GraduacionEsf {
  constructor(esf, cil, eje, marcasDisponibles) {
    this.esf = esf;
    this.cil = cil;
    this.eje = eje;
    this.marcasDisponibles = marcasDisponibles;
  }
}

//Creo instancia Receta Sugerida (de tipo Receta)
//Aqui se almacenará la receta sugerida
const recetaEsfSugerida = new Receta("OD", null, -0.0, 0, "OI", null, -0.0, 0);

//Creo Array para almacenar las graduaciones disponibles
const graduacionesEsfericasDisponibles = new Array(GraduacionEsf);

//DECLARO FUNCION -- Lleno el array con las graduaciones y marcas disponibles
//De acuerdo a las especificaciones de los distintos fabricantes
const completarGraduacionesEsfericasDisponibles = () => {
  for (let esf = -20.0; esf <= -6.5; esf += 0.5) {
    if (esf >= -20.0 && esf < -12.0) {
      graduacionesEsfericasDisponibles.push(
        new GraduacionEsf(esf, -0.0, 0, "Biofinity XR, Proclear")
      );
    } else if (esf >= -12.0 && esf < -10.0) {
      graduacionesEsfericasDisponibles.push(
        new GraduacionEsf(esf, -0.0, 0, "Air Optix, Avaira, Biofinity")
      );
    } else if (esf >= -10.0 && esf <= -6.5) {
      graduacionesEsfericasDisponibles.push(
        new GraduacionEsf(
          esf,
          -0.0,
          0,
          "Air Optix, Avaira, Biofinity, Biomedics, Soflens59"
        )
      );
    }
  }
  for (let esf = -6.0; esf <= -0.25; esf += 0.25) {
    graduacionesEsfericasDisponibles.push(
      new GraduacionEsf(
        esf,
        -0.0,
        0,
        "Air Optix, Avaira, Biofinity, Biomedics, Soflens59"
      )
    );
  }
  for (let esf = +0.25; esf <= 6.0; esf += 0.25) {
    graduacionesEsfericasDisponibles.push(
      new GraduacionEsf(
        esf,
        -0.0,
        0,
        "Air Optix, Avaira, Biofinity, Biomedics, Soflens59"
      )
    );
  }
  for (let esf = 6.5; esf <= 15.0; esf += 0.5) {
    if (esf >= 6.5 && esf <= 8.0) {
      graduacionesEsfericasDisponibles.push(
        new GraduacionEsf(esf, -0.0, 0, "Air Optix, Avaira, Biofinity")
      );
    } else if (esf > 8.0 && esf <= 15.0) {
      graduacionesEsfericasDisponibles.push(
        new GraduacionEsf(esf, -0.0, 0, "Biofinity XR, Proclear")
      );
    }
  }
};

//DECLARO FUNCION -- Calculo graduacion esferica sugerida de acuerdo al valor del cilindro
const calcularEsfSugerido = (esf, cil) => {
  let sugeridaEsferica;
  //Si el cilindrico adaptado es 0.00 o 0.25, el esferico sugerido queda como está
  if (Math.abs(cil) >= 0 && Math.abs(cil) <= 0.25) {
    sugeridaEsferica = esf;
  } 
  //Si el cilindrico adaptado es 0.50 o 0.75, al esferico sugerido se le resta o suma 0.25
  else if (Math.abs(cil) > 0.25 && Math.abs(cil) <= 0.75) {
    if (cil < 0) {
      sugeridaEsferica = esf - 0.25;
    } else if (cil > 0) {
      sugeridaEsferica = esf + 0.25;
    }
  } 
  //Si el cilindrico adaptado es 1.00 o 1.25, al esferico sugerido se le resta o suma 0.50
  else if (Math.abs(cil) > 0.75 && Math.abs(cil) <= 1.25) {
    if (cil < 0) {
      sugeridaEsferica = esf - 0.5;
    } else if (cil > 0) {
      sugeridaEsferica = esf + 0.5;
    }
  } 
  //Si el cilindrico adaptado es 1.50 o 2.75, al esferico sugerido se le resta o suma 0.75
  else if (Math.abs(cil) > 1.25 && Math.abs(cil) <= 1.75) {
    if (cil < 0) {
      sugeridaEsferica = esf - 0.75;
    } else if (cil > 0) {
      sugeridaEsferica = esf + 0.75;
    }
  }
  //En caso de que el cil sea mayor a 1.75, no se recomiendan lentes esfericas
  return sugeridaEsferica;
};

//DECLARO FUNCION -- Funcion para asignar graduacion esferica sugerida, segun los valores de la receta adaptada
const asignaGradEsfericaSugerida = () => {
  if (recetaAdaptada.esfOjo1 !== null) {
    if (Math.abs(recetaAdaptada.cilOjo1) <= 1.75) {
      recetaEsfSugerida.esfOjo1 = calcularEsfSugerido(
        recetaAdaptada.esfOjo1,
        recetaAdaptada.cilOjo1
      );
    } else {
      recetaEsfSugerida.esfOjo1 = null;
    }
  } else {
    recetaEsfSugerida.esfOjo1 = recetaAdaptada.esfOjo1;
    recetaEsfSugerida.cilOjo1 = recetaAdaptada.cilOjo1;
    recetaEsfSugerida.ejeOjo1 = recetaAdaptada.ejeOjo1;
  }
  if (recetaAdaptada.esfOjo2 !== null) {
    if (Math.abs(recetaAdaptada.cilOjo2) <= 1.75) {
      recetaEsfSugerida.esfOjo2 = calcularEsfSugerido(
        recetaAdaptada.esfOjo2,
        recetaAdaptada.cilOjo2
      );
    } else {
      recetaEsfSugerida.esfOjo2 = null;
    }
  } else {
    recetaEsfSugerida.esfOjo2 = recetaAdaptada.esfOjo2;
    recetaEsfSugerida.cilOjo2 = recetaAdaptada.cilOjo2;
    recetaEsfSugerida.ejeOjo2 = recetaAdaptada.ejeOjo2;
  }
};


//----------------
//AHORA FALTA:
//Tomar la receta que se va a usar para el recomendador (mostrarla y preguntar si desea continuar)
//Ejecutar el recomendador --> Ocultar los otros divs y mostrar el resultado
//De acuerdo al resultado ingresado, mostrar imagen del producto disponible (con link a la info)
//Boton "Buscar nuevo (recargar pagina)"
//----------------

//----------------
//HAY QUE CAMBIAR TODO ESTO QUE TENGA ALERT
//DECLARO FUNCION -- Muestro por pantalla la graduación y marca sugerida para la lente
const sugerirLenteEsf = (ojo, esf, cil, eje) => {
  if (esf !== null) {
    //Si la graduación sugerida es mayor a 15.00 o menor a -20.00, no hay graduaciones disponibles
    if (esf > 15.0 || esf < -20.0) {
      alert(
        `La graduación recomendada para el ${ojo} es ${esf.toFixed(
          2
        )} ${cil.toFixed(
          2
        )} x ${eje}º. \nNo hay lentes esféricas disponibles para esta graduación.`
      );
    } else {
      alert(
        `Lente recomendada para el ${ojo}: ${sugerirMarca(
          buscaEsfSugeridoEntreDisponibles(esf)
        )}`
      );
    }
  } else {
    if (cil !== null) {
      alert(
        `Debido al alto poder cilindrico, no se recomiendan lentes esféricas para el ${ojo}.\nSe sugiere adaptar lentes tóricas`
      );
    }
  }
};
//----------------

//DECLARO FUNCION -- Devolver marcas recomendadas de acuerdo a la graduación esférica sugerida
const buscaEsfSugeridoEntreDisponibles = (esfABuscar) => {
  let elementoBuscado = graduacionesEsfericasDisponibles.findIndex(
    (Element) => Element.esf == esfABuscar
  );
  //En caso de no hallar el elemento, aproxima a la mas conveniente.
  if (elementoBuscado == -1) {
    if (esfABuscar > 0) {
      elementoBuscado = graduacionesEsfericasDisponibles.findIndex(
        (Element) => Element.esf == esfABuscar - 0.25
      );
    } else if (esfABuscar <= 0) {
      elementoBuscado = graduacionesEsfericasDisponibles.findIndex(
        (Element) => Element.esf == esfABuscar + 0.25
      );
    }
  }
  // Si encuentra el elemento buscado, devuelve su indice
  return elementoBuscado;
};

//DECLARO FUNCION -- Sugerir graduación y marcas de acuerdo al indice obtenido
const sugerirMarca = (indice) => {
  return `${graduacionesEsfericasDisponibles[indice].esf.toFixed(
    2
  )} ${graduacionesEsfericasDisponibles[indice].cil.toFixed(2)} x ${
    graduacionesEsfericasDisponibles[indice].eje
  }º \nMarcas disponibles: ${
    graduacionesEsfericasDisponibles[indice].marcasDisponibles
  }`;
};

//LLAMO FUNCION -- Completar array de graduaciones disponibles
completarGraduacionesEsfericasDisponibles();

/*

//LLAMO FUNCION -- Asignar graduación esferica a receta sugerida
asignaGradEsfericaSugerida();

//LLAMO FUNCION -- Calculo lente sugerida para ambos ojos
sugerirLenteEsf(
  recetaEsfSugerida.ojo1,
  recetaEsfSugerida.esfOjo1,
  recetaEsfSugerida.cilOjo1,
  recetaEsfSugerida.ejeOjo1
);
sugerirLenteEsf(
  recetaEsfSugerida.ojo2,
  recetaEsfSugerida.esfOjo2,
  recetaEsfSugerida.cilOjo2,
  recetaEsfSugerida.ejeOjo2
);

//PRUEBAS CONSOLA
console.table(graduacionesEsfericasDisponibles);
console.table(recetaAdaptada);
console.table(recetaEsfSugerida);

*/