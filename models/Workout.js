module.exports = {};
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises: {
        type: []
    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

/* Some other examples from previous activities
 email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },

    userCreated: {
        type: Date,
        default: Date.now,
    },
/*
{ Resistance Workout Example
    day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
   { Cardio Workout Example
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },

*/