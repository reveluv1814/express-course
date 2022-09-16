const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send('about')
})

app.get('/weather',(req,res)=>{
    res.send('weather')
})

app.use((req,res)=>{
    res.status(404).send('No se encontro tu pagina')
})

//llega aqui si no encuentra las rutas
app.listen(3000)
console.log(`Server on port ${3000}`)