"use strict";

const displaypersons = () => {
    taskList.sort();

    let html = "";

    for (const task of taskList) {
        html += "<p><a href='#'>Delete</a>" + task.toString() + "</p>";
    }

    $("#persons").html(html);

    $("#persons").find("a").each( (index, a) => {

        $(a).click( evt => {
            taskList.load().delete(index).save();

            displaypersons();

            evt.preventDefault();
            $("input:first").focus();
        });
    });
}

$(document).ready( () => {

    $("#add_task").click( () => {
        const taskObj = {
            fname: $("#first_name").val(),
            mname: $("#middle_name").val(), 
            lname: $("#last_name").val(),
            street_1: $("#street1").val(),
            street_2: $("#street2").val(),
            nCity: $("#city").val(),
            nState: $("#state").val(),
            zipCode: $("#zip_code").val(),
            homePhone: $("#home_phone").val(),
            cellPhone: $("#cell_phone").val(),
            workPhone: $("#work_phone").val(),
            nEmail: $("#email").val(),
            d_o_b: $("#dob").val(),
            nCredit: $("#credit").val(),
            houseInhab: $("#household_inhabitants").val(),
            nNotes: $("#notes").val()
        };
        const newTask = new Task(taskObj);

        if (newTask.isValid) {
            taskList.load().add(newTask).save();
            displaypersons();
            $("#first_name").val("");
            $("#middle_name").val("");
            $("#last_name").val("");
            $("#street1").val("");
            $("#street2").val("");
            $("#city").val("");
            $("#state").val("");
            $("#zip_code").val("");
            $("#home_phone").val("");
            $("#cell_phone").val("");
            $("#work_phone").val("");
            $("#email").val("");
            $("#dob").val("");
            $("#credit").val("");
            $("#household_inhabitants").val("");
            $("#notes").val("");
        }else{
            alert("Please make sure all fields are filled in.")
        }
        $("#task").select();
    });

    $("#clear_persons").click( () => {
        taskList.clear();
        $("#persons").html("");
        $("#first_name").val("");
        $("#middle_name").val("");
        $("#last_name").val("");
        $("#street1").val("");
        $("#street2").val("");
        $("#city").val("");
        $("#state").val("");
        $("#zip_code").val("");
        $("#home_phone").val("");
        $("#cell_phone").val("");
        $("#work_phone").val("");
        $("#email").val("");
        $("#dob").val("");
        $("#credit").val("");
        $("#household_inhabitants").val("");
        $("#notes").val("");
        $("#first_name").focus();
    });

    taskList.load()
    displaypersons();
    $("#first_name").focus();
});


