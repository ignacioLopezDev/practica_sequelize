const express = require('express');
const login = express.Router();

login.get('/',(req, res) => {
    res.send('This is login link');
})


module.exports = login