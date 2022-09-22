const express = require("express");
const morgan = require("morgan");
const path = require("path"); 


const app = express();

//importamos las rutas
const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");

//settings
app.set("case sensitive routing", true);
app.set("appName", "Express Course");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes importadas
app.use(HomeRoutes);
app.use(UserRoutes);
//
//files statics
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(3000);
console.log(`Server on port ${3000}`);
