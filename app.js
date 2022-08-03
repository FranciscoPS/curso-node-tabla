const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');

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
