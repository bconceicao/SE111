"use strict";

let total = 0;
let tTestScore = "";
let studentName ="";

studentName = prompt("Enter student name");
const sName = (studentName)

tTestScore = prompt("Enter test score #1");
const score1 = parseInt(tTestScore);

tTestScore = prompt("Enter test score #2");
const score2 = parseInt(tTestScore);


tTestScore = prompt("Enter test score #3");
const score3 = parseInt(tTestScore);

tTestScore = prompt("Enter test score #4");
const score4 = parseInt(tTestScore);


total = (score1 * .2) + (score2 * .2) + (score3 * .25) + (score4 * .35);


const average = parseFloat(total);


const html = `<p>Student name: ${sName}</p>
              <p>Score 1 = ${score1}</p>
              <p>Score 2 = ${score2}</p>
              <p>Score 3 = ${score3}</p>
              <p>Score 3 = ${score4}</p>
              <p>Average Score = ${average}</p>`

document.write(html);