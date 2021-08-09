require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connect to database"));

app.use(express.json());

const poemRouter = require("./routes/poem");
app.use("/poem", poemRouter);

app.listen(8080, () => console.log("server startead"));
