const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const db = require("./db");
const routes = require("./routes/index");

const app = express();

//Midelwares

app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

//Port
db.sync({ force: false })
  .then(() => {
    app.listen(3000, () => {
      console.log("listen on port 3000");
    });
  })
  .catch(console.error);
