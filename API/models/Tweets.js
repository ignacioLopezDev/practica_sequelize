const S = require("sequelize");
const db = require("../db");

class Tweets extends S.Model {}

Tweets.init(
  {
    text: {
      type: S.STRING,
      allowNull:false
    },
  },
  { sequelize: db, modelName: "tweets" }
);

module.exports = Tweets;
