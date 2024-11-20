const express = require("express");
const router = express.Router();
const posts = require("../data/posts.js");

//prefix /posts

// crud routs

// index
router.get("/", (req, res) => {
  res.send("indico tutta la lista dei posts");
});

// show
router.get("/:id", (req, res) => {
  res.send("mostro il post specifico");
});

// store
router.post("/", (req, res) => {
  res.send("creo un nuovo post");
});

// update
router.put("/:id", (req, res) => {
  res.send("aggiorno il post specifico");
});

// modify
router.patch("/:id", (req, res) => {
  res.send("modifico il post specifico");
});

// destroy
router.delete("/:id", (req, res) => {
  res.send("cancello il post specifico");
});

module.exports = router;
