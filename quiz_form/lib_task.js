"use strict";
let correct_answers = 0;
let total_correct = 0;
let comp_link = "";

class Result {

    constructor({ name, first_question, second_question, third_question, fourth_question, fifth_question, correct_answers, comp_link}) {

        this.name = name;
        this.first_question = first_question;
        this.second_question = second_question;
        this.third_question = third_question;
        this.fourth_question = fourth_question;
        this.fifth_question = fifth_question;
        this.correct_answers = correct_answers;
        this.comp_link = comp_link
        
    }

    get isValid() {

        let result = true;
        const today = new Date();

        if (this.name === "") {
            result = false;
        }
        
        if(this.first_question === "")  {
            result = false;
        }else if ((this.first_question.toLowerCase() != "a" ) && (this.first_question.toLowerCase() != "b") && (this.first_question.toLowerCase() !="c") && (this.first_question.toLowerCase() != "d")){
            result = false;
        }else if(this.first_question.toLowerCase() == "a"){
            correct_answers += 1;
        }

        if(this.second_question === "") {
            result = false;
        }else if ((this.second_question.toLowerCase() != "a" ) && (this.second_question.toLowerCase() != "b") && (this.second_question.toLowerCase() !="c") && (this.second_question.toLowerCase() != "d")){
            result = false;
        }else if(this.second_question.toLowerCase() == "b"){
            correct_answers += 1;
        }

        if(this.third_question === "") {
            result = false
        }else if ((this.third_question.toLowerCase() != "a" ) && (this.third_question.toLowerCase() != "b") && (this.third_question.toLowerCase() !="c") && (this.third_question.toLowerCase() != "d")){
            result = false;
        }else if (this.third_question.toLowerCase() == "c"){
            correct_answers += 1;
        }

        if(this.fourth_question === "") {
            result = false
        }else if ((this.fourth_question.toLowerCase() != "a" ) && (this.fourth_question.toLowerCase() != "b") && (this.fourth_question.toLowerCase() !="c") && (this.fourth_question.toLowerCase() != "d")){
            result = false;
        }else if(this.fourth_question.toLowerCase() == "d"){
            correct_answers += 1;
        }

        if(this.fifth_question === "") {
            result = false
        }else if ((this.fifth_question.toLowerCase() != "a" ) && (this.fifth_question.toLowerCase() != "b") && (this.fifth_question.toLowerCase() !="c") && (this.fifth_question.toLowerCase() != "d")){
            result = false;
        }else if(this.fifth_question.toLowerCase() == "a"){
            correct_answers += 1;
        }

       total_correct = correct_answers;

        return result;

    }

    // getCompLink(){


    //     if (correct_answers = 0){
    //         comp_link = "quiz_form\qb_comp4.html"
    //     }else if (correct_answers <3){
    //         comp_link = "Check Comparison".link(qb_comp2.html)
    //     }else if (correct_answers <5){
    //         comp_link = "quiz_form\qb_comp2.html"
    //     }else if (correct_answers = 5){
    //         comp_link = "quiz_form\qb_comp1.html"
    //     }

    //     return comp_link;
    // }

    



    
    

    toString() {

        if (total_correct == 5){
            comp_link = '<a href = "qb_comp1.html" target = "_blank">Check Comparison</a>'
        }else if ((total_correct == 3) || (total_correct == 4)){
            comp_link = '<a href = "qb_comp2.html" target = "_blank">Check Comparison</a>'
        }else if ((total_correct == 2) || (total_correct == 1)) {
            comp_link = '<a href = "qb_comp3.html" target = "_blank">Check Comparison</a>'
        }else if (total_correct == 0){
            comp_link = '<a href = "qb_comp4.html" target = "_blank">Check Comparison</a>'
        }


        return `Name: ${this.name.toLowerCase()}<br>First Answer: ${this.first_question.toLowerCase()}<br>Second Answer: ${this.second_question.toLowerCase()}<br>Third Answer: ${this.third_question.toLowerCase()}<br>Fourth Answer: ${this.fourth_question.toLowerCase()}<br>Fifth Answer: ${this.fifth_question.toLowerCase()}<br>Score: ${correct_answers} <br> ${comp_link}`;
        
    }
}

