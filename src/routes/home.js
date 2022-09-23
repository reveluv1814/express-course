//usamos un modulo de express para exportar rutas este es "Router"
const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {
  let isActive = true;

  const users = [
    {
      id: 1,
      name: "neil",
      lastname: "graneros",
    },
    {
      id: 2,
      name: "gary",
      lastname: "nova",
    },
  ];

  res.render("index", {
    title: "Pagina inicio Express y EJS",
    isActive,
    users,
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data);

  res.render("posts", {
    posts: response.data,
  });
});
//se exporta
module.exports = router;
