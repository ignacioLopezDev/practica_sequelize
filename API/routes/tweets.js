const express = require("express");
const { Tweets, User } = require("../models");
const tweets = express.Router();


// traigo los tweets trayendo tmb la info del usuario 
tweets.get("/", (req, res) => {
  Tweets.findAll({include:{model:User}}).then((result) => res.send(result));
});


// metodo post de un tweet vinculado al usuario 
tweets.post("/", (req, res) => {
  const { name, age, email, text } = req.body;
  User.findOrCreate({ where: { email } }).then((result) => {
    const user = result[0];
    Tweets.create({ text }).then((newTweet) => {
      newTweet.setUser(user);
      res.status(201).send(newTweet);
    });
  });
});

module.exports = tweets;
