const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
  })
  .check((argv, options) => {
    //Si la base o "b" no es un número, dispara un error
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    //Si no hay error, regresamos true
    return true;
  }).argv;

console.clear();

//Podemos desestructurar el arrego, asi mismo podemos asignar un valor por defecto en caso de no recibir la variable o de que llegue en undefined
// const [, , arg3 = "base=5"] = process.argv;

//Podemos separar cuando se encuentre un =
//const [, base = 5] = arg3.split("=");
// console.log(base);

const { base, listar } = argv;

crearArchivo(base, listar)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
