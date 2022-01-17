//Clase Graduacion Esferica
class GraduacionEsf {
  constructor(esf, cil, eje, marcasDisponibles) {
    this.esf = esf;
    this.cil = cil;
    this.eje = eje;
    this.marcasDisponibles = marcasDisponibles;
  }
}

//Creo instancia Receta Sugerida (de tipo Receta)
const recetaEsfSugerida = new Receta("OD", null, -0.0, 0, "OI", null, -0.0, 0);

//Creo Array para almacenar las graduaciones disponibles
const graduacionesEsfericasDisponibles = new Array(GraduacionEsf);

//DECLARO FUNCION -- Lleno el array con las graduaciones y marcas disponibles
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
  if (Math.abs(cil) >= 0 && Math.abs(cil) <= 0.25) {
    sugeridaEsferica = esf;
  } else if (Math.abs(cil) > 0.25 && Math.abs(cil) <= 0.75) {
    if (cil < 0) {
      sugeridaEsferica = esf - 0.25;
    } else if (cil > 0) {
      sugeridaEsferica = esf + 0.25;
    }
  } else if (Math.abs(cil) > 0.75 && Math.abs(cil) <= 1.0) {
    if (cil < 0) {
      sugeridaEsferica = esf - 0.5;
    } else if (cil > 0) {
      sugeridaEsferica = esf + 0.5;
    }
  } else if (Math.abs(cil) > 1.0 && Math.abs(cil) <= 1.75) {
    if (cil < 0) {
      sugeridaEsferica = esf - 0.75;
    } else if (cil > 0) {
      sugeridaEsferica = esf + 0.75;
    }
  }
  //En caso de que el cil sea mayor a 1.75, no se recomiendan lentes esfericas
  return sugeridaEsferica;
};

//DECLARIO FUNCION -- Funcion para asignar graduacion esferica sugerida, segun los valores de la receta adaptada
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

//DECLARO FUNCION -- Muestro por pantalla la graduación sugerida para la lente
const sugerirLenteEsf = (ojo, esf, cil, eje) => {
  if (esf !== null) {
    alert(`Lente recomendada para el ${ojo}: ${esf.toFixed(2)} ${cil.toFixed(2)} x ${eje}º \n${sugerirMarca(buscaEsfSugeridoEntreDisponibles(esf))}`);
  } else {
    if (cil !== null) {
      alert(
        `Debido al alto poder cilindrico, no se recomiendan lentes esféricas para el ${ojo}.\nSe sugiere adaptar lentes tóricas`
      );
    }
  }
};

//DECLARO FUNCION -- Devolver marcas recomendadas de acuerdo a la graduación esférica sugerida
const buscaEsfSugeridoEntreDisponibles = (esfABuscar) => {
    return graduacionesEsfericasDisponibles.findIndex(Element => Element.esf == esfABuscar);
}

//DECLARO FUNCION -- Sugerir marca de acuerdo a graduación
const sugerirMarca = (indice) => {
    return (`Marcas disponibles: ${graduacionesEsfericasDisponibles[indice].marcasDisponibles}`);
}

//LLAMO FUNCION -- Completar array de graduaciones disponibles
completarGraduacionesEsfericasDisponibles();

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



//Testeos
console.table(graduacionesEsfericasDisponibles);
console.table(recetaAdaptada);
console.table(recetaEsfSugerida);
console.log(Math.max(graduacionesEsfericasDisponibles.esf));