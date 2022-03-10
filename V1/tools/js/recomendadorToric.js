//Variables Globales
let recomendacionOD;
let recomendacionOI;
let graduacionesToricasDisponibles;
let marcasEncontradas ="";
let marcasEncontradasArr = [];
let marcasAMostrarArr = [];
let marcasCodigoArr = [];

//Obtengo graduaciones TORICAS disponibles de archivo JSON
//Accedo con AJAX a JSON local
const URLGET = "./graduacionesTor.json";
$.ajax({
  type: "GET",
  url: URLGET,
  //Seteo la consulta como sincrona para poder acceder a los datos
  async: false,
  success : function (resultado) {
    graduacionesToricasDisponibles=resultado;
  }
})

//Chequeo que se haya accedido OK a los datos del JSON
console.table(graduacionesToricasDisponibles);

//Oculto opcion RECETA GUARDADA si no existe alguna previamente calculada
document.addEventListener("DOMContentLoaded", ()=>{
  if(localStorage.getItem("DISTrecetaAdaptada") === null){
    $("#recetaGuardada").fadeOut();
  } else {
    $("#recetaGuardada").fadeIn();
  }
})

//Oculto Selectores al seleccionar RECETA GUARDADA
$("#botonRecetaGuardada").click((evt) => {
  evt.preventDefault;
  mostrarDatosAUtilizar();
  $("#selectores").slideUp(1000);
})


//Refresco la pagina si se actualiza el local storage, para asi mostrar RECETA GUARDADA
window.addEventListener("storage", ()=> {
  window.location.reload();
})

//Creo objeto RECETA ADAPTADA con la información del Local Storage
let recetaGuardada = JSON.parse(localStorage.getItem("DISTrecetaAdaptada"));
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
ojoACalcular = localStorage.getItem("DISTojoACalcular");


//Creo instancia Receta Sugerida (de tipo Receta)
//Aqui se almacenará la receta sugerida
const recetaSugerida = new Receta("OD", null, -0.0, 0, "OI", null, -0.0, 0);

//Creo instancia Receta Invertida(de tipo Receta)
//Se utilizará para chequear que los cilindricos estén en negativo al sugerir lentes
const recetaInvertida = new Receta("OD", null, null, null, "OI", null, null, null);

//DECLARO FUNCION -- Redondear a cuartos (las graduaciones van de 0.25 en 0.25)
//Funcion para redondear los resultados obtenidos a cuartos (multiplos de 0.25)
const redondearACuartos = (num) => {
  num *= 4;
  num = Math.round(num) / 4;
  return num;
};



//---------------
//DECLARO FUNCION -- Calculo cilindrico sugerido de acuerdo al valor de la receta
//Las lentes de contacto toricas solo vienen disponibles en cilindricos terminados en .25 o .75
// Las graduaciones terminadas en .00 o .50 deben adaptarse a uno de dichos cilindricos
const calcularCilSugerido = (cil) => {
  let cilSugerido;  
  //Si el cilindrico adaptado termina en .00 o .50, se aproxima al inmediato inferior
  if (cil % 0.5 == 0) {
    if (cil < 0) {
      cilSugerido = cil + 0.25;
    } else if (cil > 0) {
      cilSugerido = cil - 0.25;
    }
  //Si el cilindrico adaptado termina en .25 o .75, queda como está
  } else if (cil % 0.25 == 0) {
      cilSugerido = cil;
  } 
   //Devuelve el valor sugerido para el cilindrico
  return cilSugerido;
};

//DECLARO FUNCION -- Funcion para asignar graduacion cilindrica sugerida, de acuerdo a los valores de la receta adaptada
const asignaGradToricaSugerida = () => {
  //Si el esferico no es null, se debe calcular este ojo
  if (recetaAdaptada.esfOjo1 !== null) {
      recetaSugerida.esfOjo1 = recetaAdaptada.esfOjo1;
      recetaSugerida.ejeOjo1 = recetaAdaptada.ejeOjo1;
      //El Cilindrico se adapta de acuerdo a lo disponible
      recetaSugerida.cilOjo1 = calcularCilSugerido(
        recetaAdaptada.cilOjo1
      );
  } else {
    //Si el esferico es null, significa que no debe calcularse ese ojo.
    //Entonces deja todo tal cual está
    recetaSugerida.esfOjo1 = recetaAdaptada.esfOjo1;
    recetaSugerida.cilOjo1 = recetaAdaptada.cilOjo1;
    recetaSugerida.ejeOjo1 = recetaAdaptada.ejeOjo1;
  }

  //Si el esferico no es null, se debe calcular este ojo
  if (recetaAdaptada.esfOjo2 !== null) {
      recetaSugerida.esfOjo2 = recetaAdaptada.esfOjo2;
      recetaSugerida.ejeOjo2 = recetaAdaptada.ejeOjo2;
      //El Cilindrico se adapta de acuerdo a lo disponible
      recetaSugerida.cilOjo2 = calcularCilSugerido(
        recetaAdaptada.cilOjo2
      );
  } else {
    //Si el esferico es null, significa que no debe calcularse ese ojo.
    //Entonces deja todo tal cual está
    recetaSugerida.esfOjo2 = recetaAdaptada.esfOjo2;
    recetaSugerida.cilOjo2 = recetaAdaptada.cilOjo2;
    recetaSugerida.ejeOjo2 = recetaAdaptada.ejeOjo2;
  }

  //Para poder recomendar una lente, el cilindrico debe estar expresado en NEGATIVO
  //Me tengo que asegurar de que ambas graduaciones esten expresadas asi

  //PASO 1: Uso el metodo TRANSPOSICION de la clase RECETA para invertir la RECETA SUGERIDA
  recetaSugerida.transposicion();
  console.table(recetaSugerida);
  console.table(recetaInvertida);

  //PASO 2: Chequeo si el cilindrico del OD de la receta sugerida está en positivo o negativo
  if (recetaSugerida.cilOjo1 > 0){
    //Si esta en positivo, asigno a al OD de la receta sugerida la graduacion opuesta
    recetaSugerida.esfOjo1 = recetaInvertida.esfOjo1;
    recetaSugerida.cilOjo1 = recetaInvertida.cilOjo1;
    recetaSugerida.ejeOjo1 = recetaInvertida.ejeOjo1;
  } //Si está en negativo, no hago nada
  console.table(recetaSugerida);

  //PASO 3: Chequeo si el cilindrico del OI de la receta sugerida está en positivo o negativo
  if (recetaSugerida.cilOjo2 > 0){
    //Si esta en positivo, asigno a al OD de la receta sugerida la graduacion opuesta
    recetaSugerida.esfOjo2 = recetaInvertida.esfOjo2;
    recetaSugerida.cilOjo2 = recetaInvertida.cilOjo2;
    recetaSugerida.ejeOjo2 = recetaInvertida.ejeOjo2;
  } //Si está en negativo, no hago nada
  console.table(recetaSugerida);

};

//DECLARO FUNCION -- Muestro por pantalla la graduación y marca sugerida para la lente
const sugerirLenteTor = (ojo, esf, cil, eje) => {
  console.table(recetaSugerida);
  if (esf !== null) {
    //Si el cilindrico es menor a 0.75, se sugiere adaptar lentes esfericas
    if (Math.abs(cil) < 0.75) {
      return(
        `${ojo}: La graduación recomendada es ${recetaSugerida.addSign(esf.toFixed(
          2
        ))} ${recetaSugerida.addSign(cil.toFixed(
          2
        ))} x ${eje}º.\n`+`Se sugiere adaptar lentes esféricas.`
      );
    //Si el cilindrico es mayor a 6.00, no hay lentes descartables disponibles
    } else if (Math.abs(cil) > 6.00) {
      return(
        `${ojo}: La graduación recomendada es ${recetaSugerida.addSign(esf.toFixed(
          2
        ))} ${recetaSugerida.addSign(cil.toFixed(
          2
        ))} x ${eje}º.\n`+`No hay lentes tóricas descartables disponibles para esta graduación.`
      );
    } else {
      return(
        `${ojo}: Lente recomendada:\n`+`${sugerirMarca(
          buscaSugeridoEntreDisponibles(esf, cil)
        )}`
      );
    }
  } else return "";
};

//DECLARO FUNCION -- Devolver marcas recomendadas de acuerdo a la graduación sugerida
const buscaSugeridoEntreDisponibles = (esfABuscar, cilABuscar) => {
  let elementoBuscado = graduacionesToricasDisponibles.findIndex(
    (Element) => Element.esf == esfABuscar && Element.cil == cilABuscar
  );
  //En caso de no hallar el elemento, aproxima a la mas conveniente.
  if (elementoBuscado == -1) {
    if (esfABuscar > 0) {
      elementoBuscado = graduacionesToricasDisponibles.findIndex(
        (Element) => Element.esf == esfABuscar - 0.25 && Element.cil == cilABuscar
      );
    } else if (esfABuscar <= 0) {
      elementoBuscado = graduacionesToricasDisponibles.findIndex(
        (Element) => Element.esf == esfABuscar + 0.25 && Element.cil == cilABuscar
      );
    }
  }
  // Si encuentra el elemento buscado, devuelve su indice
  return elementoBuscado;
};

//DECLARO FUNCION -- Sugerir graduación y marcas de acuerdo al indice obtenido
const sugerirMarca = (indice) => {
  //Obtengo marcas que se recomendaran
  marcasEncontradas += (graduacionesToricasDisponibles[indice].marcasDisponibles)+", ";
  //Separo marcas en un array
  marcasEncontradasArr = marcasEncontradas.split(", ");
  //Elimino marcas duplicadas
  marcasAMostrarArr =[...new Set(marcasEncontradasArr)];
  //Copio array de marcas a mostrar a array de codigos de marcas
  marcasCodigoArr = [].concat(marcasAMostrarArr);

  //Devuelvo texto a mostrar
  return `${recetaSugerida.addSign(graduacionesToricasDisponibles[indice].esf.toFixed(
    2
  ))} ${recetaSugerida.addSign(graduacionesToricasDisponibles[indice].cil.toFixed(2))}.
  \nMarcas disponibles: ${
    graduacionesToricasDisponibles[indice].marcasDisponibles
  }`;
};

//---------------


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
 
    //Modifico array de marcas, ingresando su codigo
    for (let i = 0; i < marcasCodigoArr.length; i++){
      switch (marcasCodigoArr[i]){
        case "Air Optix Toric":
          marcasCodigoArr[i] = "air-optix-for-astigmatism";
          break;
        case "Avaira Toric":
          marcasCodigoArr[i] = "avaira-toric";
          break;
        case "Biofinity MTO":
          marcasCodigoArr[i] = "biofinity-toric-xr";
          break;
        case "Biofinity Toric":
          marcasCodigoArr[i] = "biofinity-toric";
          break;
        case "Biomedics Toric":
          marcasCodigoArr[i] = "biomedics-toric";
          break;
        case "Soflens Toric":
          marcasCodigoArr[i] = "soflens66";
          break;
        case "One Day Toric":
          marcasCodigoArr[i] = "clariti-one-day-toric";
          break;        
        case "":
          marcasCodigoArr.pop();
          break;
      }
    }
    
    //Muestro la imagen de cada marca de lentes sugerida
    for(let i = 0; i < marcasCodigoArr.length; i++){
      $("#gridImagenes").append('<div class="cell" id="celda'+i+'"></div>');
      $("#"+"celda"+i).append("<img class='imagenesLentes' id='"+marcasCodigoArr[i]+"'src='../assets/images/lentes/"+marcasCodigoArr[i]+".png' width=250rem></a>");
      $("#"+"celda"+i).append('<button id="infoCelda'+i+'" class="main-button info-button" style="opacity: 0">+Info</button>');
      //Agrego un botón superpuesto a la imagen con link a la info del producto
      $("#infoCelda"+i).on("click", ()=>{
        window.open("https://imagineone.com.ar/producto/"+marcasCodigoArr[i]+"/", "_blank"); 
      })
      $("#"+"celda"+i).hover(()=>{
        $("#"+marcasCodigoArr[i]).fadeTo(500, "0.5");
        $("#infoCelda"+i).fadeTo(500, "1");
      },
      ()=>{
        $("#"+marcasCodigoArr[i]).fadeTo(500, "1");
          $("#infoCelda"+i).fadeTo(500, "0");
      })
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
          //LLAMO FUNCION -- Asignar graduación torica a receta sugerida
          asignaGradToricaSugerida();

          //LLAMO FUNCION -- Calculo lente sugerida para ambos ojos
          recomendacionOD = sugerirLenteTor(
            recetaSugerida.ojo1,
            recetaSugerida.esfOjo1,
            recetaSugerida.cilOjo1,
            recetaSugerida.ejeOjo1
          );
          recomendacionOI = sugerirLenteTor(
            recetaSugerida.ojo2,
            recetaSugerida.esfOjo2,
            recetaSugerida.cilOjo2,
            recetaSugerida.ejeOjo2
          );
          
          //Oculto div resultados
          $("#resultados").slideUp(1000);
          
          //Ejecuto Funciones
          mostrarRecomendaciones();  
    });
  }
  //Ejecuto Funciones
  agregoElementoRecetaNueva();
  agregoBotonesFinal();
}