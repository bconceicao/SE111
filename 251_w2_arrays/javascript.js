//Declare and initialize main vars
let total1 = [];      //Accumulator for all scores gathered
let total2 = [];
let total3 = [];
let total4 = [];
let total5 = [];
let count = 0;      //Counts how many grades entered in order to calc avg
let lab1 = 0;      //Used to to temporarily hold the lab1 each round of grade entry
let lab2 = 0;
let lab3 = 0;
let lab4 = 0;
let lab5 = 0;
let fName = [];      // temporarily hold student first name
let lName = [];      // temporarily hold student last name
let stuTotal = 0;




let tStudents = prompt("Enter total number of students: ", );
stuTotal = parseInt(tStudents);




do {

    let tFname = prompt("Enter student first name: ")
    fName.push(tFname);

    let tLname = prompt("Enter student last name: ")
    lName.push(tLname);

    //Prompt for lab1 and convert from String to Integer (default value is -1)
    let tLab1 = prompt("Enter grade for Lab 1: ");
    lab1 = parseInt(tLab1);

    //if the lab1 is a valid amount...
    if (lab1 >= 0 && lab1 <= 100) {
        total1.push(lab1);  //total1 = total1 + lab1;       //Add on the current lab1 to var
        
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
        total2.push(lab2);  //total2 = total2 + lab1;       //Add on the current lab1 to var
        
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
        total3.push(lab3);  //total3 = total3 + lab3;       //Add on the current lab1 to var
        
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
        total4.push(lab4);  //total3 = total3 + lab4;       //Add on the current lab1 to var
        
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
        total5.push(lab5);  //total5 = total5 + lab5;       //Add on the current lab1 to var
        count++;                                        // increment counter
        //document.write(`<p>Score ${count}: ${lab5}</p>`);  //output current lab1 to generate lab1 list
    }

    // If it is not between 0 and 100, and it is not = -1, then it is a bad value
    else if (lab5 != -1) {
        alert("Score must be a valid number from 0 to 100.");   //display error message
    }


} while (count < stuTotal);  //loop while user does not enter -1



for (i = 0; i < count; i++) {
    document.write(`<p>First Name: ${fName[i]}</p>`)
    document.write(`<p>Last Name: ${lName[i]}</p>`)
    tGrade = ((total1[i] + total2[i] + total3[i] + total4[i] + total5[i]) / 5)

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

    document.write(`<p>Final Average: ${tGrade}</p>`)

    document.write(`<p>Final Letter Grade: ${letter}</p>`);



}


//Now that we are done the loop...
//document.write(fName, lName);

//const average1 = parseInt(total1 / count)                 //calc the avg (once)
//document.write(`<p>Average for Lab 1 is: ${average1}</p>`);   //output the avg

//const average2 = parseInt(total2 / count)                 //calc the avg (once)
//document.write(`<p>Average for Lab 2 is: ${average2}</p>`);   //output the avg

//const average3 = parseInt(total3 / count)                 //calc the avg (once)
//document.write(`<p>Average for Lab 3 is: ${average3}</p>`);   //output the avg

//const average4 = parseInt(total4 / count)                 //calc the avg (once)
//document.write(`<p>Average for Lab 4 is: ${average4}</p>`);   //output the avg

//const average5 = parseInt(total5 / count)                 //calc the avg (once)
//document.write(`<p>Average for Lab 5 is: ${average5}</p>`);   //output the avg

// convert vars for names and each lab/fname/lname to arrays
// display student/grades by index number
// avg the labs by index number to get average and letter grade