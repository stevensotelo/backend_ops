const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const operacion = require("./route_operacion");

app.use("/",operacion);

const port = process.env.PORT || 3002;

console.log("Puerto " + port );

app.listen(port, err => {
    if (err) return console.log(err);
    console.log(`Servidor corriendo en el puerto: ${port}`);
})