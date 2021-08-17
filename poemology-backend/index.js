const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,PATCH,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
};

mongoose.connect(
  "mongodb+srv://mgdbpass:mgdbpass@cluster0.sczhx.mongodb.net/Cluster0?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());
app.use(allowCrossDomain);

// app.use(function (req, res, next) {
//   if (req.header("Authorization") !== "bob") {
//     //const error = new Error('Unauthorized');
//     //error.c
//     res.status(401).send();
//   }

//   next();
// });

const poemRouter = require("./routes/poem");
app.use("/poem", poemRouter);

app.listen(PORT, () =>
  console.log("Server loaded= on heroku and running on port" + PORT)
);
