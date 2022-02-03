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
    }
  }
    