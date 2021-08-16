const express = require("express");
const router = express.Router();
const poem = require("../models/poem");
//Getting all Poems

router.get("/", async (req, res) => {
  try {
    const poems = await poem.find();
    res.json(poems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getPoem, (req, res) => {
  res.json(res.poem);
});

// Creating one
router.post("/", async (req, res) => {
  const poemtest = new poem({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    likes: 0,
  });
  try {
    const newPoem = await poemtest.save();
    res.status(201).json(newPoem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.patch("/:id", getPoem, async (req, res) => {
  if (req.body.likes != null) {
    res.poem.likes = req.body.likes;
  }

  try {
    const updatedPoem = await res.poem.save();
    res.json(updatedPoem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", getPoem, async (req, res) => {
  try {
    await res.poem.remove();
    res.json({ message: "Deleted poem" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getPoem(req, res, next) {
  let poemFind;
  try {
    poemFind = await poem.findById(req.params.id);
    if (poemFind == null) {
      return res.status(404).json({ message: "Cannot find poem" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.poem = poemFind;
  next();
}

module.exports = router;
