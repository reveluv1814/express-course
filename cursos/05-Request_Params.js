const express = require("express");

const app = express();

app.get("/hello/:user", (req, res) => {
  console.log(req.params);
  res.send(`Hello ${req.params.user}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  const result = parseInt(x) + parseInt(y);
  console.log(result);
  res.send(`Result: ${result}`);
});

app.get('/name/:nombre/age/:age',(req,res)=>{
    console.log(req.params)
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`)
})


app.listen(3000);
console.log(`Server on port ${3000}`);
