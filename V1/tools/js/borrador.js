const distometria = () => {
    if (ojoACalcular == "od" || ojoACalcular == "ao") {
        esfOjo1Adaptado = 
            Math.round((
            parseFloat(esfOjo1/100) / (1-((parseFloat(distanciaVertice)/1000)*parseFloat(esfOjo1/100)))
            )*100)/100;
        cilOjo1Adaptado = 
            Math.round((
            parseFloat(cilOjo1/100) / (1-((parseFloat(distanciaVertice)/1000)*parseFloat(cilOjo1/100)))     
            )*100)/100;
    } else {
        esfOjo1Adaptado = null;
        cilOjo1Adaptado = null;
    }
    if (ojoACalcular == "oi" || ojoACalcular == "ao") {
        esfOjo2Adaptado = 
            Math.round((
            parseFloat(esfOjo2/100) / (1-((parseFloat(distanciaVertice)/1000)*parseFloat(esfOjo2/100)))
            )*100)/100;
        cilOjo2Adaptado = 
            Math.round((
            parseFloat(cilOjo2/100) / (1-((parseFloat(distanciaVertice)/1000)*parseFloat(cilOjo2/100)))     
            )*100)/100;
    } else {
        esfOjo2Adaptado = null;
        cilOjo2Adaptado = null;
    }
}