const express = require("express");
const morgan = require('morgan')

const app = express();

app.use(morgan('dev'))

app.get('/dashboard', (req,res)=>{
  res.send('Dashboard page')
})


app.listen(3000);
console.log(`Server on port ${3000}`);
