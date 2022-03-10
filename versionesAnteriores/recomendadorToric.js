//Clase Graduacion Torica
class GraduacionTor {
    constructor(esf, cil, eje, marcasDisponibles) {
      this.esf = esf;
      this.cil = cil;
      this.eje = eje;
      this.marcasDisponibles = marcasDisponibles;
    }
  }


//Creo Array para almacenar las graduaciones disponibles
const graduacionesToricasDisponibles = new Array(GraduacionTor);

//DECLARO FUNCION -- Lleno el array con las graduaciones y marcas disponibles
const completarGraduacionesToricasDisponibles = () => {
  for (let esf = -20.0; esf <= -6.5; esf += 0.5) {
    if (esf >= -20.0 && esf < -10.0) {
      graduacionesToricasDisponibles.push(
        new GraduacionTor(esf, -0.75, 0, "Biofinity MTO")
      );
    } else if (esf >= -10.0 && esf < -9.0) {
      graduacionesToricasDisponibles.push(
        new GraduacionTor(esf, -0.75, 0, "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Ultra Toric")
      );
    } else if (esf >= -9.0 && esf <= -6.5) {
      graduacionesToricasDisponibles.push(
        new GraduacionTor(
          esf,
          -0.75,
          0,
          "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Soflens Toric, Ultra Toric"
        )
      );
    }
  }
  for (let esf = -6.0; esf <= 5.0; esf += 0.25) {
    graduacionesToricasDisponibles.push(
      new GraduacionTor(
        esf,
        -0.75,
        0,
        "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Soflens Toric, Ultra Toric"
      )
    );
  }
  for (let esf = +5.5; esf <= 6.0; esf += 0.25) {
    graduacionesToricasDisponibles.push(
        new GraduacionTor(
          esf,
          -0.75,
          0,
          "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Ultra Toric"
        )
      );
    }
    for (let esf = +6.0; esf <= 8.0; esf += 0.50) {
        graduacionesToricasDisponibles.push(
            new GraduacionTor(
              esf,
              -0.75,
              0,
              "Air Optix Toric, Avaira Toric, Biofinity Toric"
            )
          );
        }
///---------------
        for (let esf = -20.0; esf <= -6.5; esf += 0.5) {
            if (esf >= -20.0 && esf < -10.0) {
              graduacionesToricasDisponibles.push(
                new GraduacionTor(esf, -1.25, 0, "Biofinity MTO")
              );
            } else if (esf >= -10.0 && esf < -9.0) {
              graduacionesToricasDisponibles.push(
                new GraduacionTor(esf, -1.25, 0, "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Ultra Toric")
              );
            } else if (esf >= -9.0 && esf <= -6.5) {
              graduacionesToricasDisponibles.push(
                new GraduacionTor(
                  esf,
                  -1.25,
                  0,
                  "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Soflens Toric, Ultra Toric"
                )
              );
            }
          }
          for (let esf = -6.0; esf <= 5.0; esf += 0.25) {
            graduacionesToricasDisponibles.push(
              new GraduacionTor(
                esf,
                -1.25,
                0,
                "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Soflens Toric, Ultra Toric"
              )
            );
          }
          for (let esf = +5.5; esf <= 6.0; esf += 0.25) {
            graduacionesToricasDisponibles.push(
                new GraduacionTor(
                  esf,
                  -1.25,
                  0,
                  "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Ultra Toric"
                )
              );
            }
            for (let esf = +6.0; esf <= 8.0; esf += 0.50) {
                graduacionesToricasDisponibles.push(
                    new GraduacionTor(
                      esf,
                      -1.25,
                      0,
                      "Air Optix Toric, Avaira Toric, Biofinity Toric"
                    )
                  );
                }
//------
///---------------
for (let esf = -20.0; esf <= -6.5; esf += 0.5) {
    if (esf >= -20.0 && esf < -10.0) {
      graduacionesToricasDisponibles.push(
        new GraduacionTor(esf, -1.75, 0, "Biofinity MTO")
      );
    } else if (esf >= -10.0 && esf < -9.0) {
      graduacionesToricasDisponibles.push(
        new GraduacionTor(esf, -1.75, 0, "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Ultra Toric")
      );
    } else if (esf >= -9.0 && esf <= -6.5) {
      graduacionesToricasDisponibles.push(
        new GraduacionTor(
          esf,
          -1.75,
          0,
          "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Soflens Toric, Ultra Toric"
        )
      );
    }
  }
  for (let esf = -6.0; esf <= 5.0; esf += 0.25) {
    graduacionesToricasDisponibles.push(
      new GraduacionTor(
        esf,
        -1.75,
        0,
        "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Soflens Toric, Ultra Toric"
      )
    );
  }
  for (let esf = +5.5; esf <= 6.0; esf += 0.25) {
    graduacionesToricasDisponibles.push(
        new GraduacionTor(
          esf,
          -1.75,
          0,
          "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Ultra Toric"
        )
      );
    }
    for (let esf = +6.0; esf <= 8.0; esf += 0.50) {
        graduacionesToricasDisponibles.push(
            new GraduacionTor(
              esf,
              -1.75,
              0,
              "Air Optix Toric, Avaira Toric, Biofinity Toric"
            )
          );
        }
//------
///---------------
for (let esf = -20.0; esf <= -6.5; esf += 0.5) {
    if (esf >= -20.0 && esf < -10.0) {
      graduacionesToricasDisponibles.push(
        new GraduacionTor(esf, -2.25, 0, "Biofinity MTO")
      );
    } else if (esf >= -10.0 && esf < -9.0) {
      graduacionesToricasDisponibles.push(
        new GraduacionTor(esf, -2.25, 0, "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Ultra Toric")
      );
    } else if (esf >= -9.0 && esf <= -6.5) {
      graduacionesToricasDisponibles.push(
        new GraduacionTor(
          esf,
          -2.25,
          0,
          "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Soflens Toric, Ultra Toric"
        )
      );
    }
  }
  for (let esf = -6.0; esf <= 5.0; esf += 0.25) {
    graduacionesToricasDisponibles.push(
      new GraduacionTor(
        esf,
        -2.25,
        0,
        "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Soflens Toric, Ultra Toric"
      )
    );
  }
  for (let esf = +5.5; esf <= 6.0; esf += 0.25) {
    graduacionesToricasDisponibles.push(
        new GraduacionTor(
          esf,
          -2.25,
          0,
          "Air Optix Toric, Avaira Toric, Biofinity Toric, Biomedics Toric, Ultra Toric"
        )
      );
    }
    for (let esf = +6.0; esf <= 8.0; esf += 0.50) {
        graduacionesToricasDisponibles.push(
            new GraduacionTor(
              esf,
              -2.25,
              0,
              "Air Optix Toric, Avaira Toric, Biofinity Toric"
            )
          );
        }
//------
///---------------
for (let esf = -10.0; esf <= -6.5; esf += 0.5) {
      graduacionesToricasDisponibles.push(
        new GraduacionTor(esf, -2.75, 0, "Biofinity MTO"));
    }
for (let esf = -6.0; esf <= 0.0; esf += 0.25) {
    graduacionesToricasDisponibles.push(
      new GraduacionTor(
        esf,
        -2.75,
        0,
        "Biofinity MTO, Soflens Toric"
      )
    );
  }
  for (let esf = +0.25; esf <= 6.0; esf += 0.25) {
    graduacionesToricasDisponibles.push(
        new GraduacionTor(
          esf,
          -2.75,
          0,
          "Biofinity MTO"
        )
      );
    }
    for (let esf = +6.0; esf <= 8.0; esf += 0.50) {
        graduacionesToricasDisponibles.push(
            new GraduacionTor(
              esf,
              -2.75,
              0,
              "Biofinity MTO"
            )
          );
        }
//------
///---------------
for (let esf = -10.0; esf <= -6.5; esf += 0.5) {
    graduacionesToricasDisponibles.push(
      new GraduacionTor(esf, -3.25, 0, "Biofinity MTO"));
  }
for (let esf = -6.0; esf <= 6.0; esf += 0.25) {
  graduacionesToricasDisponibles.push(
    new GraduacionTor(
      esf,
      -3.25,
      0,
      "Biofinity MTO"
    )
  );
}
  for (let esf = +6.5; esf <= 8.0; esf += 0.50) {
      graduacionesToricasDisponibles.push(
          new GraduacionTor(
            esf,
            -3.25,
            0,
            "Biofinity MTO"
          )
        );
      }
//------
///---------------
for (let esf = -10.0; esf <= -6.5; esf += 0.5) {
    graduacionesToricasDisponibles.push(
      new GraduacionTor(esf, -3.75, 0, "Biofinity MTO"));
  }
for (let esf = -6.0; esf <= 6.0; esf += 0.25) {
  graduacionesToricasDisponibles.push(
    new GraduacionTor(
      esf,
      -3.75,
      0,
      "Biofinity MTO"
    )
  );
}
  for (let esf = +6.5; esf <= 8.0; esf += 0.50) {
      graduacionesToricasDisponibles.push(
          new GraduacionTor(
            esf,
            -3.75,
            0,
            "Biofinity MTO"
          )
        );
      }
//------
///---------------
for (let esf = -10.0; esf <= -6.5; esf += 0.5) {
    graduacionesToricasDisponibles.push(
      new GraduacionTor(esf, -4.25, 0, "Biofinity MTO"));
  }
for (let esf = -6.0; esf <= 6.0; esf += 0.25) {
  graduacionesToricasDisponibles.push(
    new GraduacionTor(
      esf,
      -4.25,
      0,
      "Biofinity MTO"
    )
  );
}
  for (let esf = +6.5; esf <= 8.0; esf += 0.50) {
      graduacionesToricasDisponibles.push(
          new GraduacionTor(
            esf,
            -4.25,
            0,
            "Biofinity MTO"
          )
        );
      }
//------
///---------------
for (let esf = -10.0; esf <= -6.5; esf += 0.5) {
    graduacionesToricasDisponibles.push(
      new GraduacionTor(esf, -4.75, 0, "Biofinity MTO"));
  }
for (let esf = -6.0; esf <= 6.0; esf += 0.25) {
  graduacionesToricasDisponibles.push(
    new GraduacionTor(
      esf,
      -4.75,
      0,
      "Biofinity MTO"
    )
  );
}
  for (let esf = +6.5; esf <= 8.0; esf += 0.50) {
      graduacionesToricasDisponibles.push(
          new GraduacionTor(
            esf,
            -4.75,
            0,
            "Biofinity MTO"
          )
        );
      }
//------
///---------------
for (let esf = -10.0; esf <= -6.5; esf += 0.5) {
    graduacionesToricasDisponibles.push(
      new GraduacionTor(esf, -5.25, 0, "Biofinity MTO"));
  }
for (let esf = -6.0; esf <= 6.0; esf += 0.25) {
  graduacionesToricasDisponibles.push(
    new GraduacionTor(
      esf,
      -5.25,
      0,
      "Biofinity MTO"
    )
  );
}
  for (let esf = +6.5; esf <= 8.0; esf += 0.50) {
      graduacionesToricasDisponibles.push(
          new GraduacionTor(
            esf,
            -5.25,
            0,
            "Biofinity MTO"
          )
        );
      }
//------
///---------------
for (let esf = -10.0; esf <= -6.5; esf += 0.5) {
    graduacionesToricasDisponibles.push(
      new GraduacionTor(esf, -5.75, 0, "Biofinity MTO"));
  }
for (let esf = -6.0; esf <= 6.0; esf += 0.25) {
  graduacionesToricasDisponibles.push(
    new GraduacionTor(
      esf,
      -5.75,
      0,
      "Biofinity MTO"
    )
  );
}
  for (let esf = +6.5; esf <= 8.0; esf += 0.50) {
      graduacionesToricasDisponibles.push(
          new GraduacionTor(
            esf,
            -5.75,
            0,
            "Biofinity MTO"
          )
        );
      }
//------
};

completarGraduacionesToricasDisponibles();


let graduacionesJSON = JSON.stringify(graduacionesToricasDisponibles);

console.log(graduacionesJSON);

console.table(graduacionesToricasDisponibles);