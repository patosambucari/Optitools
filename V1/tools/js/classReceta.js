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
  
    //Metodo para agregar signo positivo a graduaciones positivas
    addSign = (power) => {
      if (power>0) {
        return "+"+power;
      } else return power;
    }

    /*Metodo para Calcular Transposición
    Nuevo ESF: Esferico original + Cilindrico original
    Nuevo CIL: Cilindrico original * -1
    Nuevo EJE: Eje original +/- 90º
    */
      transposicion = () => {
      if (ojoACalcular == "od" || ojoACalcular == "ao") {
        recetaInvertida.esfOjo1 = redondearACuartos(
          Math.round(
            (parseFloat(this.esfOjo1) +
                  parseFloat(this.cilOjo1)) *
              100
          ) / 100
        );
        recetaInvertida.cilOjo1 = redondearACuartos(
          Math.round(
            -(parseFloat(this.cilOjo1)) *
              100
          ) / 100
        );
        if (this.ejeOjo1 <= 90) { 
            recetaInvertida.ejeOjo1 = this.ejeOjo1 + 90;
          } else if (this.ejeOjo1 > 90) {
            recetaInvertida.ejeOjo1 = this.ejeOjo1 - 90;
          }
      }
      if (ojoACalcular == "oi" || ojoACalcular == "ao") {
        recetaInvertida.esfOjo2 = redondearACuartos(
          Math.round(
            (parseFloat(this.esfOjo2) +
                  parseFloat(this.cilOjo2)) *
              100
          ) / 100
        );
        recetaInvertida.cilOjo2 = redondearACuartos(
          Math.round(
            -(parseFloat(this.cilOjo2)) *
              100
          ) / 100
        );
        if (this.ejeOjo2 <= 90) { 
            recetaInvertida.ejeOjo2 = this.ejeOjo2 + 90;
          } else if (this.ejeOjo2 > 90) {
            recetaInvertida.ejeOjo2 = this.ejeOjo2 - 90;
          }
        }
    };

    //Metodo para mostrar los datos de las recetas
    //Solo mostrará los ojos calculados, y ajustará todo a 2 decimales
    //Tambien fuerza agregar el signo + en caso de ser graduaciones positivas
    muestroDatos = () => {
      if (ojoACalcular == "od") {
        return `${this.ojo1.toUpperCase()} ${this.addSign(this.esfOjo1.toFixed(
          2
        ))} ${this.addSign(this.cilOjo1.toFixed(2))} x ${this.ejeOjo1}º`;
      } else if (ojoACalcular == "oi") {
        return `${this.ojo2.toUpperCase()} ${this.addSign(this.esfOjo2.toFixed(
          2
        ))} ${this.addSign(this.cilOjo2.toFixed(2))} x ${this.ejeOjo2}º`;
      } else {
        return `OD: ${this.addSign(this.esfOjo1.toFixed(2))} ${this.addSign(this.cilOjo1.toFixed(2))} x ${
          this.ejeOjo1
        }º \nOI: ${this.addSign(this.esfOjo2.toFixed(2))} ${this.addSign(this.cilOjo2.toFixed(2))} x ${
          this.ejeOjo2
        }º`;
      }
    }
  }
    