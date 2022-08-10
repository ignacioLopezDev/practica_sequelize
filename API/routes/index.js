const express = require("express");
const router = express.Router();

const login = require('./login');
const pruebas = require('./pruebas');
const tweets = require('./tweets');


router.use('/login', login)
router.use('/pruebas', pruebas)
router.use('/tweets', tweets)

router.get("/", (req, res) => {
  res.send("Bienvenido");
});

router.get("*", (req, res) => {
  res.send("Este enlace es incorrecto");
});



module.exports = router;
