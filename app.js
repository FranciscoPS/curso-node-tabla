const { crearArchivo } = require("./helpers/multiplicar");

const base = 4;

crearArchivo(base)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
;
