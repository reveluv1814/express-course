const express = require("express");

const app = express();

//cuando el cliente manda datos

app.use(express.text())//el metodo text sirve para que express pueda procesar el texto que le envian las aplicaciones del cliente

app.use(express.json())//el metodo json sirve para que express pueda procesar el json que le envian las aplicaciones del cliente

app.use(express.urlencoded({extended: false}))//el metodo urlencoded sirve para que express pueda procesar datos de un formulario que le envian las aplicaciones del cliente. el extend espacifica que sera una url simple 


app.post('/user',(req,res)=>{
    console.log(req.body) //body es el cuerpo de la peticion que envia el usuario al servidor
    res.send('Nuevo usuario creado')
})

app.listen(3000);
console.log(`Server on port ${3000}`);
