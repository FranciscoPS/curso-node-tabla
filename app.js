const { crearArchivo } = require("./helpers/multiplicar");

// const base = 4;

// crearArchivo(base)
//   .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
//   .catch((err) => console.log(err));

console.clear();

console.log(process.argv);

//Podemos desestructurar el arrego, asi mismo podemos asignar un valor por defecto en caso de no recibir la variable o de que llegue en undefined
// const [, , arg3 = "base=5"] = process.argv;
// console.log(arg3);

//Podemos separar cuando se encuentre un =
// const [, base = 5] = arg3.split("=");
// console.log(base);
