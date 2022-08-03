const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    describe: "Muestra la tabla en la consola"
  })
  .check((argv, options) => {
    //Si la base o "b" no es un número, dispara un error
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    //Si no hay error, regresamos true
    return true;
  }).argv;

module.exports =  argv;