//Variables Globales
let recomendacionOD;
let recomendacionOI;
let graduacionesEsfericasDisponibles;
let marcasEncontradas ="";
let marcasEncontradasArr = [];
let marcasAMostrarArr = [];

//Obtengo graduaciones disponibles de archivo JSON
//Accedo con AJAX a JSON local
const URLGET = "./graduacionesEsf.json";
$.ajax({
  type: "GET",
  url: URLGET,
  //Seteo la consulta como sincrona para poder acceder a los datos
  async: false,
  success : function (resultado) {
    graduacionesEsfericasDisponibles=resultado;
  }
})

//Oculto opcion RECETA GUARDADA si no existe alguna previamente calculada
document.addEventListener("DOMContentLoaded", ()=>{
  if(localStorage.getItem("recetaAdaptada") === null){
    $("#recetaGuardada").fadeOut();
  } else {
    $("#recetaGuardada").fadeIn();
  }
})

//Refresco la pagina si se actualiza el local storage, para asi mostrar RECETA GUARDADA
window.addEventListener("storage", ()=> {
  window.location.reload();
})

//Creo objeto Recepta Adaptada con la información del Local Storage
let recetaGuardada = JSON.parse(localStorage.getItem("recetaAdaptada"));
const recetaAdaptada = new Receta(
  "OD",
  recetaGuardada.esfOjo1,
  recetaGuardada.cilOjo1,
  recetaGuardada.ejeOjo1,
  "OI",
  recetaGuardada.esfOjo2,
  recetaGuardada.cilOjo2,
  recetaGuardada.ejeOjo2
); 

//Recupero Ojo a Calcular
ojoACalcular = localStorage.getItem("ojoACalcular");


//Creo instancia Receta Sugerida (de tipo Receta)
//Aqui se almacenará la receta sugerida
const recetaEsfSugerida = new Receta("OD", null, -0.0, 0, "OI", null, -0.0, 0);

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

//DECLARO FUNCION -- Muestro en HTML recomendaciones
const mostrarRecomendaciones = () => {

  //Agrego elementos para mostrar datos
  const agregoElementoRecomendaciones = () => {
    const nuevoH3RecomendacionOD = document.createElement("h3");
    const nuevoH3RecomendacionOI = document.createElement("h3");
    const textoRecomendacionOD = document.createTextNode(recomendacionOD);
    const textoRecomendacionOI = document.createTextNode(recomendacionOI);
    nuevoH3RecomendacionOD.appendChild(textoRecomendacionOD);
    nuevoH3RecomendacionOI.appendChild(textoRecomendacionOI);
    $("#recomendaciones").hide()
      .append(nuevoH3RecomendacionOD)
      .append(nuevoH3RecomendacionOI)
      .slideDown(1000, ()=>{
        $("#gridImagenes").slideDown(1000);
      });    
  }

  //Agrego imagenes de las lentes sugeridas
  const agregoImagenes = () => {
    //Se agregara bajo las recomendaciones, una imagen de cada marca de lentes sugerida
    //con enlace a su información
    $("#recomendaciones").append($("<h3 class='subtitulo'>Hacer click en la lente para más información</h3>"));
    $("#recomendaciones").append($("<div class='container' id='gridImagenes' style='display:none'></div>"));
    $("#gridImagenes").append($("<tr class='row' id='fila1'></div>"));
    //Modifico el array de graduaciones a mostrar, de acuerdo a la imagen
    for (let i = 0; i < marcasAMostrarArr.length; i++){
      switch (marcasAMostrarArr[i]){
        case "Biofinity XR":
          marcasAMostrarArr[i] = "biofinityxr";
          break;
        case "Proclear":
          marcasAMostrarArr[i] = "proclearsph";
          break;
        case "Avaira":
          marcasAMostrarArr[i] = "avaira";
          break;
        case "Biomedics":
          marcasAMostrarArr[i] = "biomed";
          break;
        case "Biofinity":
          marcasAMostrarArr[i] = "biofinity";
          break;
        case "Soflens59":
          marcasAMostrarArr[i] = "soflens59";
          break;
        case "Air Optix":
          marcasAMostrarArr[i] = "aohy";
          break;        
        case "":
          marcasAMostrarArr.pop();
          break;
      }
    }
    console.table(marcasAMostrarArr);
    
    //Muestro la imagen de cada marca de lentes sugerida
    for(let i = 0; i < marcasAMostrarArr.length; i++){
        $("#gridImagenes").append($("<a href='https://imagineone.com.ar/producto/"+marcasAMostrarArr[i]+"/' target='_blank'><img id='"+marcasAMostrarArr[i]+"'src='../assets/images/lentes/"+marcasAMostrarArr[i]+".png' width=250rem></a>"));
    }
  }

  //Agrego botones al final
  const agregoBotonFinal = () => {
    const botonVolverAEmpezar =document.createElement("button");
    botonVolverAEmpezar.innerText="VOLVER A EMPEZAR";
    botonVolverAEmpezar.className="main-button";
    let divActual = document.getElementById("recomendaciones");
    divActual.appendChild(botonVolverAEmpezar);
    botonVolverAEmpezar.addEventListener("click", ()=> {
      window.location.reload()
    });
  }

  //Ejecuto las 3 funciones juntas
  agregoElementoRecomendaciones();
  agregoImagenes();
  agregoBotonFinal();
}

//DECLARO FUNCION -- Llama a las funciones necesarias para calcular recomendacion
const mostrarDatosAUtilizar = () => {

  //Agrego elementos para mostrar datos
  const agregoElementoRecetaNueva = () => {
    const nuevoH3Resultado = document.createElement("h3");
    const nuevoH4Resultado = document.createElement("h4");
    const tituloRecetaAdaptada = document.createTextNode(`Se recomendarán lentes para la siguiente receta:`);
    const datosRecetaAdaptada = document.createTextNode(`${recetaAdaptada.muestroDatos()}`);
    nuevoH3Resultado.appendChild(tituloRecetaAdaptada);
    nuevoH4Resultado.appendChild(datosRecetaAdaptada);
    $("#resultados").append(nuevoH3Resultado);
    $("#resultados").append(nuevoH4Resultado);
  }

  const agregoBotonesFinal = () => {
    const botonReiniciar =document.createElement("button");
    botonReiniciar.innerText="REINICIAR";
    botonReiniciar.className="main-button";
    $("#resultados").append(botonReiniciar);
    botonReiniciar.addEventListener("click", ()=> {
      window.location.reload()
    });

    const botonConfirmar =document.createElement("button");
    botonConfirmar.innerText="CONFIRMAR";
    botonConfirmar.className="main-button";
    $("#resultados").append(botonConfirmar);
    botonConfirmar.addEventListener("click", ()=> {
        //LLAMO FUNCION -- Asignar graduación esferica a receta sugerida
        asignaGradEsfericaSugerida();

        //LLAMO FUNCION -- Calculo lente sugerida para ambos ojos
        recomendacionOD = sugerirLenteEsf(
          recetaEsfSugerida.ojo1,
          recetaEsfSugerida.esfOjo1,
          recetaEsfSugerida.cilOjo1,
          recetaEsfSugerida.ejeOjo1
        );
        recomendacionOI = sugerirLenteEsf(
          recetaEsfSugerida.ojo2,
          recetaEsfSugerida.esfOjo2,
          recetaEsfSugerida.cilOjo2,
          recetaEsfSugerida.ejeOjo2
        );
        
        $("#resultados").slideUp(1000);

        mostrarRecomendaciones();

        //PRUEBAS CONSOLA
        //console.table(graduacionesEsfericasDisponibles);
        //console.table(recetaAdaptada);
        //console.table(recetaEsfSugerida);    
    });
  }
  
  agregoElementoRecetaNueva();
  agregoBotonesFinal();
}

//DECLARO FUNCION -- Muestro por pantalla la graduación y marca sugerida para la lente
const sugerirLenteEsf = (ojo, esf, cil, eje) => {
  console.table(recetaAdaptada);
  if (esf !== null) {
    //Si la graduación sugerida es mayor a 15.00 o menor a -20.00, no hay graduaciones disponibles
    if (esf > 15.0 || esf < -20.0) {
      return(
        `La graduación recomendada para el ${ojo} es ${esf.toFixed(
          2
        )} ${cil.toFixed(
          2
        )} x ${eje}º. \nNo hay lentes esféricas disponibles para esta graduación.`
      );
    } else {
      return(
        `Lente recomendada para el ${ojo}:\n ${sugerirMarca(
          buscaEsfSugeridoEntreDisponibles(esf)
        )}`
      );
    }
  } else if (cil !== null) {
      return(
        `Debido al alto poder cilindrico, no se recomiendan lentes esféricas para el ${ojo}.\nSe sugiere adaptar lentes tóricas`
      );
  } else return "";
};

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
  //Obtengo marcas que se recomendaran
  marcasEncontradas += (graduacionesEsfericasDisponibles[indice].marcasDisponibles)+", ";
  //Separo marcas en un array
  marcasEncontradasArr = marcasEncontradas.split(", ");
  //Elimino marcas duplicadas
  marcasAMostrarArr =[...new Set(marcasEncontradasArr)];

  //Devuelvo texto a mostrar
  return `${graduacionesEsfericasDisponibles[indice].esf.toFixed(
    2
  )} ${graduacionesEsfericasDisponibles[indice].cil.toFixed(2)} x ${
    graduacionesEsfericasDisponibles[indice].eje
  }º \nMarcas disponibles: ${
    graduacionesEsfericasDisponibles[indice].marcasDisponibles
  }`;

};

//Accion boton selector RECETA GUARDADA
$("#botonRecetaGuardada").click((evt) => {
  evt.preventDefault;
  mostrarDatosAUtilizar();
  $("#selectores").slideUp(1000);
})


//----------------
//AGREGAR A FUTURO:
//Ingreso de nuevas recetas
//Mejorar visualización de resultados
//Agregar boton para enviar pedido
//----------------

