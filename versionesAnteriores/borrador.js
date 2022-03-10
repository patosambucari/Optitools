  //DECLARO FUNCION -- Ingreso de datos a la receta original
  //El usuario ingresará los datos de la receta de anteojos con la que cuenta
  const ingresoDatosReceta = () => {
    if (ojoACalcular == "od" || ojoACalcular == "ao") {
      let paramGraduacion1 = Number(campoEsfOd.value);
      recetaOriginal.esfOjo1 = validoGraduacion(paramGraduacion1) / 100;
      let paramGraduacion2 = Number(campoCilOd.value);
      recetaOriginal.cilOjo1 = validoGraduacion(paramGraduacion2) / 100;
      let paramEje = Number(campoEjeOd.value);
      recetaOriginal.ejeOjo1 = validoEje(paramEje);
    }
    if (ojoACalcular == "oi" || ojoACalcular == "ao") {
      let paramGraduacion3 = Number(campoEsfOi.value);
      recetaOriginal.esfOjo2 = validoGraduacion(paramGraduacion3) / 100;
      let paramGraduacion4 = Number(campoCilOi.value);
      recetaOriginal.cilOjo2 = validoGraduacion(paramGraduacion4) / 100;
      let paramEje2 = Number(campoEjeOi.value);
      recetaOriginal.ejeOjo2 = validoEje(paramEje2);
    }
    let paramDistancia = Number(campoDistVertice.value);
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
  
  //DECLARO FUNCION -- Llama a las funciones necesarias para ejecutar
  const runDistometria = () => {
    
  
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



    //Agrego elementos para mostrar datos
    const agregoElementoRecetaOriginal = () => {
      const nuevoH3 = document.createElement("h3");
      const nuevoH4 = document.createElement("h4");
      const tituloRecetaOriginal = document.createTextNode(`La receta original ingresada es:\n`);
      const datosRecetaOriginal = document.createTextNode(`${recetaOriginal.muestroDatos()}`);
      nuevoH3.appendChild(tituloRecetaOriginal);
      nuevoH4.appendChild(datosRecetaOriginal);
      let divActual = document.getElementById("principal");
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
      let divActual = document.getElementById("principal");
      divActual.appendChild(nuevoH3Resultado);
      divActual.appendChild(nuevoH4Resultado);
    }
  
    agregoElementoRecetaOriginal();
    agregoElementoRecetaNueva();
  