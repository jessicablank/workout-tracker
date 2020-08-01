const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//
const PORT = process.env.PORT || 3000;

const db = require("./models");

//create an app
const app = express();

//use adds middleware
//first the logger
app.use(morgan("dev"));

//next the body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static middleware
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//respond to post request 
app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //respond to post request 
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

//listen 
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));