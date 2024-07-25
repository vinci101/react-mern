const express = require("express");

const router = express.Router();

//get all
router.get("/", (req, res) => {
  res.json({ msg: "get" });
});

//get single
router.get("/:id", (req, res) => {
  res.json({ msg: "GET Single" });
});

//post new
router.post("/", (req, res) => {
  res.json({ msg: "Post Single" });
});

//delete new
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete Single" });
});

//update
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update Single" });
});

module.exports = router;
