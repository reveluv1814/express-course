const express = require("express");

const app = express();


//?q=javascript%20books

app.get("/search", (req, res) => {
  if(req.query.q === 'javascript books'){
    res.send('lista de libros de javascript')
  }else{
    res.send('pagina normal')
  }

});

app.listen(3000);
console.log(`Server on port ${3000}`);
