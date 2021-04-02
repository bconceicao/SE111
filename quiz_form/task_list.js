"use strict";

const displayresults = () => {
    resultsList.sort();

    let html = "";

    for (const result of resultsList) {
        html += "<p><a href='#'>Delete</a>" + result.toString() + "</p>";
    }

    $("#results").html(html);

    $("#results").find("a").each( (index, a) => {

        $(a).click( evt => {
            resultsList.load().delete(index).save();

            displayresults();

            //evt.preventDefault();
            $("input:first").focus();
        });
    });
}

$(document).ready( () => {

    $("#check_results").click( () => {
        const resultObj = {
            name: $("#name").val(),
            first_question: $("#first_question").val(), 
            second_question: $("#second_question").val(),
            third_question: $("#third_question").val(),
            fourth_question: $("#fourth_question").val(),
            fifth_question: $("#fifth_question").val(),
            
        };
        const newResult = new Result(resultObj);

        if (newResult.isValid) {
            resultsList.load().add(newResult).save();
            displayresults();
            $("#name").val("");
            $("#first_question").val("");
            $("#second_question").val("");
            $("#third_question").val("");
            $("#fourth_question").val("");
            $("#fifth_question").val("");
            correct_answers = 0;
            total_correct = 0;
            
            
        }else{
            alert("Please make sure all fields are filled in with valid answers (a,b,c,d).")
        }
        $("#result").select();
    });

    $("#clear_answers").click( () => {
        resultsList.clear();
        $("#results").html("");
        $("#name").val("");
        $("#first_question").val("");
        $("#second_question").val("");
        $("#third_question").val("");
        $("#fourth_question").val("");
        $("#fifth_question").val("");
        
        $("#name").focus();
    });

    resultsList.load()
    displayresults();
    $("#name").focus();
});


