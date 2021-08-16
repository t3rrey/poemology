const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

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

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  if (req.header("Authorization") !== "bob") {
    //const error = new Error('Unauthorized');
    //error.c
    res.status(401).send();
  }

  next();
});

const poemRouter = require("./routes/poem");
app.use("/poem", poemRouter);

app.listen(PORT, () =>
  console.log("Server loaded= on heroku and running on port" + PORT)
);
