const express = require("express");

const app = express();

app.use((req,res,next)=>{
  console.log('paso por aqui')

  next()
})

app.use((req,res,next)=>{
  if(req.query.login === 'neil@neilweb.com'){
    next()
  }
  else{
    res.send('No autorizado')
  }
})

app.get('/dashboard', (req,res)=>{
  res.send('Dashboard page')
})


app.listen(3000);
console.log(`Server on port ${3000}`);
