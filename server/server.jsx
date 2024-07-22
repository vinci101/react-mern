require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

app.listen(port, () => {
  console.log(`Server ${port} started`);
});
