const express = require("express");

const route = express.Router();

function sumar(req,res){
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    let valor = x+y;

    res.status(200).send({total:valor});
}

route.get("/sumar/:x/:y",sumar);

module.exports = route;