# Fitness Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
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
Fork and run `npm i` to install dependencies. If you would like to start with data, run `node seeders/seed.js` prior to `npm start`

## Usage
If there is no data in the Mongo db collection, you will be prompted to enter an exercise to start the database. From there, you can track exercises and see your progress on the fitness dashboard. Otherwise, you will see the homepage presenting information about the last workout:
![](public/images/home-with-data.png)
![](public/images/add-exercise.png)
![](public/images/confirmation.png)
![](public/images/Workout-Dashboard.png)

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
