"use strict";

$(document).ready( () => {

    $("#join_list").click( ()=> {

        const email1 = $("#email_1").val();
        const email2 = $("#email_2").val();
        let isValid = true;

        if (email1 ===""){
            $("#email_1").next().text("this field is required");
            isValid = false;
        } else{
            $("#email_1").next().text("");
        }

        if (email2 ===""){
            $("#email_2").next().text("this field is required");
            isValid = false;
        } else if (email1 !== email2){
            $("#email_2").next().text("Emails must match");
            isValid = false;
        }else{
            $("#email_2").next().text("");
        }

        if ($("#first_name").val() === ""){
            $("#first_name").next().text("this field is required");
            isValid = false;
        } else{
            $("#first_name").next().text("");
        }

        if(isValid){
            $("#email_form").submit();
        }




    });

    $("#clear_form").click(() =>{

        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");

        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#first_name").next().text("*");

        $("#email_1").focus();
    });

    $("#email_1").focus();

});
