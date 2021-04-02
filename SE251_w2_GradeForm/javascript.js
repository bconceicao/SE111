//Declare and initialize vars
let investment = 0, rate = 0, year = 0;
let tInvestment = "", tRate = "", tYears ="";

//Do-While loop that keeps asking for the investment amount till it gets a numeric value
do {
    tInvestment = prompt("Enter the investment amount as xxxxx.xx", 10000);
    investment = parseFloat(tInvestment);
} while (isNaN(investment) == true);


//Do-While loop that keeps asking for the interest rate till it gets a numeric value
do {
    tRate = prompt("Enter the interest rate as xx.x", 7.5);
    rate = parseFloat(tRate);
} while (isNaN(rate) == true);


//Do-While loop that keeps asking for the # of years till it gets a numeric value
do {
    tYears = prompt("Enter the number of years", 10);
    years = parseFloat(tYears);
} while (isNaN(years) == true);

//Create a variable to calculate value growth.  Set it to initial investment
let futureValue = investment;

//For Loops are when we know exactly how many times we want to repeat/loop
// FOR loops have three main pieces: starting point, criteria for looping (while), and the counter incrementor or decrementor (count by 1 typically)
//This version counts from 1 to years.  Example 5 years => 1,2,3,4,5
for (let i = 1; i <= years; i++) {
    futureValue += futureValue * rate / 100;    //Will repeat this calculation for each year (10 years = time times)
}

//Done with input and calcs....output results
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);




