# Fitness Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Deployed on Heroku](https://whispering-wave-78306.herokuapp.com/)
## Description:  
 An app demonstrating the use of [npm mongoose](https://www.npmjs.com/package/mongoose) and [npm morgan](https://www.npmjs.com/package/morgan) to allow users to track multiple exercises during a workout session. 

    
## Table of Contents:
* [Installation](#installation-instructions)
* [Usage](#usage)
* [Tests](#tests)
* [Routes](/routes.md)
* [Questions](#questions)
* [License](#license-info)


## Installation Instructions
Fork! Then run `npm i` to install dependencies in the terminal. If you would like to start with data, run `npm seed` prior to `npm start`

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

## Questions
You can reach the author, Jessica Blankemeier,  via [github](http://github.com/jessicablank) and [email](mailto:jessicablankemeier@gmail.com)
![GitHub](https://img.shields.io/github/followers/jessicablank?label=follow&style=social)

## License
Copyright 2020 - present Jessica Blankemeier.
This project is licensed under the terms of the MIT license. 
More information is available at [opensource.org/licenses](https://opensource.org/licenses/MIT)
