
# API Routes 

## /api/workouts
* Async function: getLastWorkout()
* Method: GET
* Description: Returns all workout data in descending order in JSON format.

* Async function: createWorkout()
* Method: POST
* Description: Create a new workout and post to database in JSON format. 

## /api/workouts/ + id
* Async function: addExcercise()
* Method: PUT
* Description: Updates an existing workout type in JSON format such as cardio or weights.
* Requirements: workout id

## /api/workouts/range
* Async function: getWorkoutsInRange()
* Method: GET
* Description: Returns all workouts for rendering graphics.


# HTML Routes
## /
* Method: GET
* Description: join with index.html file in public folder for user to see last workout entered and buttons to route to /exercise & /stats

## /exercise
* Method: GET
* Description: join with exercise.html file in public folder for user to enter a new exercise

## /stats
* Method: GET
* Description: join with stats.html file in public folder to show graphs of exercise records

