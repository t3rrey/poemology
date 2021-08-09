require('dotenv').config
const express = require("express");
const app = express();
const mongoose = require("mongoose");

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

const poemRouter = require("./routes/poem");
app.use("/poem", poemRouter);

app.listen(process.env.PORT || 8080, () => console.log("server started"));
