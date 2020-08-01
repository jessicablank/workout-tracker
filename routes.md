
# API Endpoints 
See file api.js in the public folder.

## /api/workouts
* Async function: getLastWorkout()
* Description: Returns all workout data in descending order in JSON format.

## /api/workouts/ + id
* Async function: addExcercise()
* Method: PUT
* Description: Updates an existing workout type in JSON format such as cardio or weights
* Requirements: workout id

## /api/workouts
* Async function: createWorkout
* Method: POST
* Description: Creates a new workout in the workout db

## /api/workouts/range
* Async function: getWorkoutsInRange()
* Description: JSON workouts for rendering graphics