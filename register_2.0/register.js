"use strict";
const $ = selector => document.querySelector(selector);

const displayErrorMsgs = msgs => {
     // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");
    // create a new li element for each error message, add to ul
    
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }
    // if ul node isn't in document yet, add it
    const node = $("ul");
    if (node == null) {
        // get the form element
        const form = $("form");
        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }
}
const processEntries = () => {
    // get form controls to check for validity
    const fname = $("#first_name");
    const mname = $("#middle_name");
    const lname = $("#last_name");
    const street1st = $("#street1");
    const street2nd = $("#street2");
    const city1 = $("#city");
    const state1 = $("#state");
    const zipcode = $("zip");
    const homephone = $("#home_phone");
    const cellphone = $("#cell_phone");
    const workphone = $("#work_phone");
    const email = $("#email_address");
    const credit1 = $("#credit");
    const inhabitants = $("#household");
    const notes1 = $("#notes");
    const terms = $("#terms");


    // create array for error messages
    const msgs = [];
    // check user entries for validity
    if (fname.value == ""){
        msgs[msgs.length] = "First Name cannot be blank." ;
    }

    if (lname.value == ""){
        msgs[msgs.length] = "Last Name cannot be blank." ;
    }

    if (street1st.value == ""){
        msgs[msgs.length] = "Street 1 cannot be blank." ;
    }

    if (city1.value == ""){
        msgs[msgs.length] = "City cannot be blank." ;
    }

    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address." ;
    }
    
    if (terms.checked == false) {
        msgs[msgs.length] = "You must agree to the terms of service." ;
    }
    // submit the form or notify user of errors
    if (msgs.length == 0) { // no error messages
        $("form").submit();
    } else {
        displayErrorMsgs(msgs);
    }

    if(zipcode.length == 0) {
        msgs[msgs.length] = "Zip Code must be 5 digits." ;
    }
};

const resetForm = () => {
    $("form").reset();

    // remove error messages
    $("ul").remove();

    $("#first_name").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    $("#first_name").focus();
});