const express = require("express");
const {User} = require("../models");
const pruebas = express.Router();

pruebas.get("/", (req, res) => {
  res.send("esta es una ruta de pruebas");
});

pruebas.get("/users", (req, res) => {
  User.findAll().then((result) => res.send(result));
});

pruebas.post("/users", (req, res) => {
  const { name, email, age } = req.body;
  User.create({ name, email, age }).then((result) => res.send(result));
});

pruebas.get("/users/:id", (req, res) => {
  const id = req.params.id;
  User.findByPk(id).then((result) => res.send(result.getDomainEmail)); //--> el getDomainEmail es un metodo virtual que cree en el modelo para campturar el dominio de la persona
});


pruebas.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    User.destroy({where:{id}}).then(()=> res.send('Deleted'))
})

module.exports = pruebas;