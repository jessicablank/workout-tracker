# Fitness Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub](https://img.shields.io/github/followers/jessicablank?label=follow&style=social)
![Last Commit](https://img.shields.io/github/last-commit/jessicablank/workout-tracker)

[Deployed on Heroku: https://whispering-wave-78306.herokuapp.com/](https://whispering-wave-78306.herokuapp.com/)
## Description:  
 An app demonstrating the use of [npm mongoose](https://www.npmjs.com/package/mongoose) and [npm morgan](https://www.npmjs.com/package/morgan) to allow users to track multiple exercises during a workout session. 

 This was a bootcamp homework assignment. I was given starter code. My task was to build and test the API routes and deploy the application on Heroku. I also added styling with color and icons. 
    
## Table of Contents:
* [Installation](#installation-instructions)
* [Usage](#usage)
* [Tests](#tests)
* [Routes](/routes.md)
* [File-Tree](#file-tree)
* [Questions](#questions)
* [License](#license-info)


## Installation Instructions
Fork! Then run `npm i` to install dependencies in the terminal. If you would like to start with data, run `npm run seed` prior to `npm run start`

## Usage
If there is no data in the Mongo db collection, you will be prompted to enter an exercise to start the database. From there, you can track exercises and see your progress on the fitness dashboard. Otherwise, you will see the homepage presenting information about the last workout:

![](/public/images/home-with-data.PNG)

The "Add New Workout" button will allow you to add a new series of exercises to a workout:
![](/public/images/add-excercise.PNG)

You will receive confirmation upon each addition:

![](/public/images/confirmation.PNG)

And Then be able to see a dashboard charting cardio and resistance training:
![](/public/images/Workout-Dashboard.PNG)

## Tests
* The user is able to add exercises to a workout in progress via the "Continue Current Workout" button.
* The user is able to add exercises to a new workout via the "Add New Workout" button.
* The user is able to see previous workout data for the past week in the Workout Dashboard.

## File-Tree
```
├── LICENSE
├── models
|  ├── index.js
|  └── Workout.js
├── package-lock.json
├── package.json
├── public
|  ├── css
|  |  └── style.css
|  ├── exercise.html
|  ├── images
|  |  ├── add-excercise.PNG
|  |  ├── confirmation.PNG
|  |  ├── home-with-data.PNG
|  |  └── Workout-Dashboard.PNG
|  ├── index.html
|  ├── js
|  |  ├── api.js
|  |  ├── exercise.js
|  |  ├── index.js
|  |  ├── stats.js
|  |  └── workout.js
|  └── stats.html
├── README.md
├── routes
|  ├── api-routes.js
|  └── html-routes.js
├── routes.md
├── seeders
|  └── seed.js
└── server.js
```

## Questions
You can reach the author, Jessica Blankemeier, via [jessicablankemeier@gmail.com](mailto:jessicablankemeier@gmail.com)

## License
Copyright 2020 - present Jessica Blankemeier.
This project is licensed under the terms of the MIT license. 
More information is available at [opensource.org/licenses](https://opensource.org/licenses/MIT)
