//require models
const db = require("../models");

module.exports = (app) => {
 //Getting all of the workouts
 app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

    //Create a new workout
app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(data => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  //Update an existing workout
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      {$push: {exercises: req.body}}, 
      {new: true,
      runValidators: true }
    ) 
    .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

 //next up: range
    
}