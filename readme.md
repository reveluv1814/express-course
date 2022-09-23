## CURSO DE EXPRESS

### HTTP METHODS (Peticiones)
**VERBOS HTTP**
- **GET** : El cliente pide algo, osea el sevidor retorna algo.
- **POST**: El cliente envia datos al servidor y este lo puede guardar quizas.
- **PUT**: El cliente esta tratando de actualizar algo.
- **DELETE**: El cliente esta tratando de eliminar un dato desde el cliente al servidor.
-**PATACH**: Parecido a *PUT*, pero solo quiere actualizar una parte de los datos.

### REQ Y RES
Funcionan como un documento que no se ve.
- **Endpoint:** Es la ruta que manda el usuario o tambien el servidor. Ej: *"/about"*
- **Header:** Aqui va el tipo de documento podria ser un *json* y además el codigo del mensaje. ej: 200
- **Body:** Aqui viene el contenido, el objeto jdon ppor ejemplo.

Todo esto es un vistazo general ya que se puede desglozar más cosas en el archivo imaginario

### Middlewares

Son funciones entre el navegador y el servidor con un endpoint.

Estas funciones ayudan a controlar o ejecutan algo para despues mandarlas a una cierta ruta, por ejemplo para autorizar a una persona entrar a una ruta, primero entraria al middleware y ahi este validaria el usuario si es correcto lo manda a la ruta si no le manda un mensaje de error.

Este tiene los comunes parámetros *req y res*, pero también el **next** que pasa a la ruta que le sigue y no se estanca en esa función.

Se puede usar middlewares de terceros así nos facilitaría hacer consultas por ejemplo validar datos o mostrar imagenes, etc.

### REST API

Un **_REST API_** es un servidor que tiene ciertas urls y que nos van a permitir procesar datos

### EXPRESS SETTINGS

Son varibles de configuración para el uso en la aplicación. Estas deben estar antes de los middlewares.

```javascript
//se crea la variable
//app.set(nombreVariable , Valor variable)
app.set('appName', 'Expres Course')

//obtiene el valor de la variable

app.get('appName')

//configuracion reservada por express
app.set('case sensitive routing',true)
//sirve para que respete el nombre de la ruta si tiene mayuscula o no 
```

### EXPRESS ROUTER

Nos ayuda a importar y exportar rutas

```javascript
.....

//archivo principal imortamos

//importamos las rutas
const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");

//routes importadas
app.use(HomeRoutes)
app.use(UserRoutes)
```
Archivo de Ruta;
```javascript
//archivo a exportar donde esta la ruta

//usamos un modulo de express para exportar rutas este es "Router"
const {Router} = require('express')

const router = Router()

//rutas
router.all("/about", (req, res) => {
  res.send("about page");
});
....
///...

//se exporta
module.exports = router
```

### NODEMON

Server live

`npm i nodemon -D`

Y se configura en el package.json
```javascript
{
  "scripts":{
    "dev": "nodemon src/index.js....(ruta del index principal)"
  },
}
```

### MODULO EJS

Es un motor de plantillas y permite tener un html con sintaxis que interactue con el servidor, implementando logica de javascript.

```javascript
//instalamos ejs
npm i ejs
// en el archivo principal importamos
require('ejs')
```
- Se crea la carpeta views dentro de src
- Despues dentro de este creamos archivos .ejs y este contiene codigo html
- Y express gana una nueva funcion llamada render(), para eso configuramos express con la ayuda de path y haciendo que admita el motor de platillas, en el archivo principal del servidor:
```javascript
//configura el motor de vistas en ejs
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname,'views'))
//la variable views con el valor de la ruta concatenada con el nombre de la carpeta
``` 
- La carpeta **partials** dentro de views contiene porciones de codigo HTML que se reutilizan muchas veces.
- Se usa la siguiente sintaxis para incluir archivos de los partials.
`<%- include('partials/header'); %>`

### MODULO AXIOS

Me permite consultar apis externas como el **_fetch_** en node.
`npm i axios`
Se debe importar en la ruta: 
`const axios = require("axios");`
Despues usarlo para hacer el petición, para esto si se debe usar funciones asincronas:
(ejemplo de la utilización)
```javascript
router.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data);

  res.render("posts", {
    posts: response.data,
  });
});
```