//Declare and initialize main vars
let total1 = 0;      //Accumulator for all scores gathered
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;
let count = 0;      //Counts how many grades entered in order to calc avg
let lab1 = 0;      //Used to to temporarily hold the lab1 each round of grade entry
let lab2 = 0;
let lab3 = 0;
let lab4 = 0;
let lab5 = 0;
let fName = "";      // temporarily hold student first name
let lName = "";      // temporarily hold student last name
let stuTotal = 0;




let tStudents = prompt("Enter total number of students: ", );
stuTotal = parseInt(tStudents);




do {

    let tFname = prompt("Enter student first name: ")
    fName = (tFname);

    let tLname = prompt("Enter student last name: ")
    lName = (tLname);

    //Prompt for lab1 and convert from String to Integer (default value is -1)
    let tLab1 = prompt("Enter grade for Lab 1: ");
    lab1 = parseInt(tLab1);

    //if the lab1 is a valid amount...
    if (lab1 >= 0 && lab1 <= 100) {
        total1 += (lab1);  //total1 = total1 + lab1;       //Add on the current lab1 to var
        
        //document.write(`<p>Score ${count}: ${lab1}</p>`);  //output current lab1 to generate lab1 list
    }

    // If it is not between 0 and 100, and it is not = -1, then it is a bad value
    else if (lab1 != -1) {
        alert("Score must be a valid number from 0 to 100.");   //display error message
    }

    let tLab2 = prompt("Enter grade for Lab 2: ");
    lab2 = parseInt(tLab2);

    //if the lab1 is a valid amount...
    if (lab2 >= 0 && lab2 <= 100) {
        total2 += (lab2);  //total2 = total2 + lab1;       //Add on the current lab1 to var
        
        //document.write(`<p>Score ${count}: ${lab2}</p>`);  //output current lab1 to generate lab1 list
    }

    // If it is not between 0 and 100, and it is not = -1, then it is a bad value
    else if (lab2 != -1) {
        alert("Score must be a valid number from 0 to 100.");   //display error message
    }

    let tLab3 = prompt("Enter grade for Lab 3: ");
    lab3 = parseInt(tLab3);

    //if the lab3 is a valid amount...
    if (lab3 >= 0 && lab3 <= 100) {
        total3 += (lab3);  //total3 = total3 + lab3;       //Add on the current lab1 to var
        
        //document.write(`<p>Score ${count}: ${lab3}</p>`);  //output current lab1 to generate lab1 list
    }

    // If it is not between 0 and 100, and it is not = -1, then it is a bad value
    else if (lab3 != -1) {
        alert("Score must be a valid number from 0 to 100.");   //display error message
    }

    let tLab4 = prompt("Enter grade for Lab 4: ");
    lab4 = parseInt(tLab4);

    //if the lab4 is a valid amount...
    if (lab4 >= 0 && lab4 <= 100) {
        total4 += (lab4);  //total3 = total3 + lab4;       //Add on the current lab1 to var
        
        //document.write(`<p>Score ${count}: ${lab4}</p>`);  //output current lab1 to generate lab1 list
    }

    // If it is not between 0 and 100, and it is not = -1, then it is a bad value
    else if (lab4 != -1) {
        alert("Score must be a valid number from 0 to 100.");   //display error message
    }

    let tLab5 = prompt("Enter grade for Lab 5: ");
    lab5 = parseInt(tLab5);

    //if the lab3 is a valid amount...
    if (lab5 >= 0 && lab5 <= 100) {
        total5 += (lab5);  //total5 = total5 + lab5;       //Add on the current lab1 to var
        count++;                                        // increment counter
        //document.write(`<p>Score ${count}: ${lab5}</p>`);  //output current lab1 to generate lab1 list
    }

    // If it is not between 0 and 100, and it is not = -1, then it is a bad value
    else if (lab5 != -1) {
        alert("Score must be a valid number from 0 to 100.");   //display error message
    }


} while (count < stuTotal);  //loop while user does not enter -1




avgLab1 = total1 / stuTotal; 
avgLab2 = total2 / stuTotal; 
avgLab3 = total3 / stuTotal; 
avgLab4 = total4 / stuTotal; 
avgLab5 = total5 / stuTotal; 
tGrade = ((lab1 + lab2 + lab3 + lab4 + lab5) / 5)

if (tGrade >= 90){
    letter = "A";
}

else if (tGrade >= 80){
    letter = "B";
}

else if (tGrade >= 70){
    letter = "C";
}
    
else if (tGrade >= 60){
    letter = "D"
}

else {
    letter = "F"
}

document.write('<p><b><u>Current Student </u></b></p>')

document.write(`<p>First Name: ${fName}</p>`)
document.write(`<p>Last Name: ${lName}</p>`)

document.write(`<p>Final Average: ${tGrade}</p>`)
document.write(`<p>Final Letter Grade: ${letter}</p>`)

document.write('<p><b><u>Average for all Labs</u><b/></p>')

document.write(`<p>Avergae Lab 1 score: ${avgLab1}</p>`)
document.write(`<p>Avergae Lab 2 score: ${avgLab2}</p>`)
document.write(`<p>Avergae Lab 3 score: ${avgLab3}</p>`)
document.write(`<p>Avergae Lab 4 score: ${avgLab4}</p>`)
document.write(`<p>Avergae Lab 5 score: ${avgLab5}</p>`)






//Now that we are done the loop...
//document.write(fName, lName);