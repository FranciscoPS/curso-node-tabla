//El fs es file system
const fs = require("fs");

//Si le damos un valor a la variable de entrada, si no recibe algo va a tomarlo, en caso contrario tomará la variable que recibe
const crearArchivo = async (base = 5) => {
  try {
    console.log(`
      ==============================
               Tabla del: ${base}
      ==============================
      `);

    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

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
