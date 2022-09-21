//usamos un modulo de express para exportar rutas este es "Router"
const express = require('express')

const router = express.Router()

router.all("/about", (req, res) => {
  res.send("about page");
});

router.get("/dashboard", (req, res) => {
  res.sendFile("Dashboard page");
});

//se exporta
module.exports = router