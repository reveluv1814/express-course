const express = require("express");

const app = express();

//envia a todos los metodos (get,put, delelte, ...) un misma respuesta 

app.all("/info", (req, res) => {
  res.send('server info')
});

app.listen(3000);
console.log(`Server on port ${3000}`);
