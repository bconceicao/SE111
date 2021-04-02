const $ = selector => document.querySelector(selector);

let firScore = 0;
let secScore = 0;
let thirScore = 0;
let fourScore = 0;
let fiveScore = 0
let tStudent = "";
let average = 0;
let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;
let letter = "";



const calcGrade = evt => {
    // get user entries from the text boxes
    const score1 = $("#score_1").value;
    firScore = parseInt(score1)
    total1 = total1 + firScore;
    const score2 = $("#score_2").value;
    secScore = parseInt(score2)
    total2 = total2 + secScore;
    const score3 = $("#score_3").value;
    thirScore = parseInt(score3)
    total3 = total3 + thirScore;
    const score4 = $("#score_4").value;
    fourScore = parseInt(score4)
    total4 = total4 + fourScore;
    const score5 = $("#score_5").value;
    fiveScore = parseInt(score5)
    total5 = total5 + fiveScore;
    const student = $("#student").value;
    tStudent = student;

    //check user entries

    

    


};


const clearform = () => {
    //clear text boxes
    $("student").value = "";
    $("score_1").value = "";
    $("score_2").value = "";
    $("score_3").value = "";
    $("score_4").value = "";
    $("score_5").value = "";

    //clear span elements
    $("student_error").textContent = "*";
    $("score_1_error").textContent = "*";
    $("score_2_error").textContent = "*";
    $("score_3_error").textContent = "*";
    $("score_4_error").textContent = "*";
    $("score_5_error").textContent = "*";

    //set focus on first box after resetting form
    $("#student").focus();

    
}



    

    




//document.addEventListener("DOMContentLoaded", () => {
    //hook up click events for both buttons
    //$("calc_grade").addEventListener("click", calcGrade);

    

    //$("clear_form").addEventListener("click", clearform);

    //set focus on first text box after the form loads
    //$("#student").focus();
//});

average = (firScore + secScore + thirScore + fourScore + fiveScore) / 5

document.getElementById("calc_grade").addEventListener("click",calcGrade())
{

    

    if (average >= 90){
        letter = "A";
    }
    
    else if (average >= 80){
        letter = "B";
    }
    
    else if (average >= 70){
        letter = "C";
    }
    
    else if (average >= 60){
        letter = "D"
    }
    
    else {
        letter = "F"
    }
    
    //output for current student's grades
    document.write(`<p>Student Name: ${tStudent}</p>`);
    document.write(`<p>Student Average: ${average}</p>`);
    document.write(`<p>Final Letter Grade: ${letter}</p>`);
};
//document.getElementById("clear_form").addEventListener("click",clearform());


