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