const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//envia un archivo
app.get("/miarchivo", (req, res) => {
  res.sendFile("./logo2.png", {
    root: __dirname, //es una constante global que nos dice la ruta completa de donde esta el archivo desde el disco duro
  });
});

//envia un json
app.get("/user", (req, res) => {
  res.json({
    name: "neil",
    lastname: "graneros",
    ege: 40,
    points: [1, 2, 3],
    address: {
      city: "new york",
      street: "some street 123",
    },
  });
});

//codigo de estado 204 = que llego bien pero no manda ningun mensaje
app.get("/isAlive", (req, res) => {
  res.sendStatus(204)
});

app.listen(3000);
console.log(`Server on port ${3000}`);
