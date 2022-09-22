//usamos un modulo de express para exportar rutas este es "Router"
const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
  res.render('index', {
    title: 'Pagina inicio Express y EJS'
  });
});

router.get("/about", (req, res) => {
  res.render('about');
});

router.get("/dashboard", (req, res) => {
  res.render('dashboard');
});

//se exporta
module.exports = router