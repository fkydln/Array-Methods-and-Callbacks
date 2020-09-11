import { fifaData } from './fifa.js';
console.clear();
console.log(fifaData);
function bFunc(paramB) {
    return console.log(paramB);
}


function aFunc(paramA) {
    bFunc(paramA);
}

aFunc("Let's get this over with");
//console.log('its working');
// ⚽️ M  V P ⚽️ // Let's begin!

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final 
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

var resultA = fifaData.filter( item => item.Year === 2014);

// for (let i = 0; i < resultA.length; i++) {
//     console.log("Home Team Name " + resultA[i]["Home Team Name"]);
// }
// for (let i = 0; i < resultA.length; i++) {
//     console.log("Away Team Name " + resultA[i]["Away Team Name"]);
// }
// for (let i = 0; i < resultA.length; i++) {
//     console.log("Home Team Goals " + resultA[i]["Home Team Goals"]);
// }
// for (let i = 0; i < resultA.length; i++) {
//     console.log("Away Team Goals " + resultA[i]["Away Team Goals"]);
// }
console.log(resultA);
var homeTeamNames = resultA.map( param => param["Home Team Name"]);
console.log(homeTeamNames);
var awayTeamNames = resultA.map(param => param["Away Team Name"]);
console.log(awayTeamNames);
var homeTeamGoals = resultA.map(param => param["Home Team Goals"]);
console.log(homeTeamGoals);
var awayTeamGoals = resultA.map(param => param["Away Team Goals"]);
console.log(awayTeamGoals);

var winner = resultA.filter(param => param.Stage === "Final")
if (winner[0]["Home Team Goals"] > winner[0]["Away Team Goals"]) {
    console.log(winner[0]["Home Team Name"]);    
}
else{
console.log(winner[0]["Away Team Name"]);    
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    var onlyFinals = data.filter(param => param.Stage === "Final")
return onlyFinals;
};
console.log(getFinals(fifaData));
console.clear()

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and 
returns an array called `years` containing all of the years in the dataset */


function getYears(param) {
var years = [];
    param(fifaData).forEach(function (item) {
        years.push(item.Year);
    });
    return years;
};

   console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
