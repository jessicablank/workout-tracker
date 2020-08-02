const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const addHtmlRoutes = require("./routes/html-routes")
const addAPIRoutes = require("./routes/api-routes")


const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
const db = require("./models");


// Add logger middleware
app.use(morgan("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static middleware
app.use(express.static("public"));

// Sonnect to database environment 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Require routes
addHtmlRoutes(app);
addAPIRoutes(app);

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

  //respond to put request 
app.put("/api/workouts/:id", ({ body }, res) => {
    db.Workout.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
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