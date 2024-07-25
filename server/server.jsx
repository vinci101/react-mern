require("dotenv").config();
const express = require("express");
const port = process.env.PORT;

const mongoose = require("mongoose");

const app = express();
const workoutRoutes = require("./routes/workouts.jsx");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(workoutRoutes);

// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome to the app" });
// });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server ${port} started`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
