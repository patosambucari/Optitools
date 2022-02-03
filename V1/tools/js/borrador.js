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
  
  