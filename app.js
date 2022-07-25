//El fs es file system
const fs = require("fs");
const base = 3;

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

fs.writeFile(`Tabla-${base}`, salida, (err) => {
  if (err) throw err;
  console.log(`Tabla-${base}.txt creado correctamente.`);
});
