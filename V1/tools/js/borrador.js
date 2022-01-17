//Lleno el array con las graduaciones y lentes disponibles
for (let esf = -20.00; esf <= -12.50; esf += 0.25){
    graduacionesEsfericasDisponibles.push(new GraduacionEsf(esf, -0.00, 0, "Proclear, Biofinity XR"));
    }
    for (let esf = -12.00; esf <= -0.250; esf += 0.25){
        graduacionesEsfericasDisponibles.push(new GraduacionEsf(esf, -0.00, 0, "Air Optix, Avaira, Biofinity"));
    }
    for (let esf = +0.25; esf <= +8.00; esf += 0.25){
            graduacionesEsfericasDisponibles.push(new GraduacionEsf(esf, -0.00, 0, "Air Optix, Avaira, Biofinity"));
    }
    for (let esf = +8.25; esf <= +15.00; esf += 0.25){
                graduacionesEsfericasDisponibles.push(new GraduacionEsf(esf, -0.00, 0, "Proclear, Biofinity XR"));
    }
    for (let esf = -9.00; esf <= +6.00; esf +=0.25){
        graduacionesEsfericasDisponibles.marcasDisponibles = (`${graduacionesEsfericasDisponibles.marcasDisponibles}, Soflens59, Biomedics`);
    }    





    /*if (recetaAdaptada.esfOjo2 !== null && Math.abs(recetaAdaptada.cilOjo2) <= 1.75){
        recetaEsfSugerida.esfOjo2 = calcularEsfSugerido(recetaAdaptada.esfOjo2, recetaAdaptada.cilOjo2);
    } else {
        recetaEsfSugerida.esfOjo2 = null;
    }*/
