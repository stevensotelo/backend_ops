const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const operacion = require("./route_operacion");

app.use("/",operacion);

app.listen(3002, err => {
    if (err) return console.log(err);
    console.log(`Servidor corriendo en el puerto: 3002`);
})