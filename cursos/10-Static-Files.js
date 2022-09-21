const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//archivos estaticos
// se usan al final es lo ultimo despues de las rutas
//app.use(express.static("./public"));

app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

//primera forma
app.use("/public", express.static("./public"));
//segunda forma si cambiamos rutas o metemos todo dentro una carpeta

//para eso usamos un modulo de node path que nos ayuda a concatenar directorios

const path = require("path");

//usamos la constante de node "__dirname" que es la ruta absoluta


//y con esto tenemos el archivo estatico 

//en el path solo se pone el __dirname seguido del nombre de la carpeta que queremos que sea estatica

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(3000);
console.log(`Server on port ${3000}`);
