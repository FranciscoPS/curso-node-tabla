//El fs es file system
const fs = require("fs");

const colors = require("colors");


//Si le damos un valor a la variable de entrada, si no recibe algo va a tomarlo, en caso contrario tomará la variable que recibe
const crearArchivo = async (base = 5, listar = false) => {
  try {
    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${base} ${'x'.blue} ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log(`
        ==============================
                 Tabla del: ${base}
        ==============================
        `.green);

      console.log(salida);
    }

    // fs.writeFile(`Tabla-${base}`, salida, (err) => {
    //   if (err) throw err;
    //   console.log(`Tabla-${base}.txt creado correctamente.`);
    // });

    //La siguiente es otra forma de escribir archivos, al ser sincrono el código de abajo no se va a ejecutar si hay un error
    fs.writeFileSync(`Tabla-${base}`, salida);

    return `Tabla-${base}.txt creado correctamente.`;
  } catch (err) {
    throw err;
  }
};

//Para exportar la funcion, creamos un objeto
module.exports = {
  crearArchivo,
};
