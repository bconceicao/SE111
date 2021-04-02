const $ = selector => document.querySelector(selector);





const joinList = evt => {

//************************************************************************************************
    //gather the values stored in the specified textboxes
    let tFirstName = $("#first_name").value;
    let tMiddleName = $("#middle_name").value;
    let tLastName = $("#last_name").value;
    let tEmail = $("#email_1").value;
    let tStreet1 = $("#street1").value;
    let tStreet2 = $("#street2").value;
    let tCity = $("#city").value;
    let tState = $("#state").value;
    let tZip = $("#zip").value;
    let tHomePhone = $("#home_phone").value;
    let tCellPhone = $("#cell_phone").value;
    let tDOB = $("#dob").value;
    let tCredit = $("#credit").value;
    let tHouseInhabitants = $("#household_inhab").value;
    let tNotes = $("#notes").value;


    if (Answered(tFirstName) == false) {
        alert("Must enter First Name.")
        evt.preventDefault();
    }

    if (GotBadWords(tMiddleName) == true) {
        alert("Please avoid using those words");
        evt.preventDefault();
    }

    if (Answered(tLastName) == false) {
        alert("Must enter Last Name.")
        evt.preventDefault();
    }

    if (Answered(tStreet1) == false){
        alert("Must enter Street 1 address.")
        evt.preventDefault();
    }

    if (GotBadWords(tStreet2) == true) {
        alert("Please avoid using those words.");
        evt.preventDefault();
    }

    if (Answered(tCity) == false){
        alert("Must enter City.")
        evt.preventDefault();
    }

    if (StateInput(tState) == false){
        alert("State must be entered as 2 letter abbreviation.")
        evt.preventDefault();
    }

    if (ZipCodeInput(tZip) == false){
        alert("Zip Code must be 5 digits.")
        evt.preventDefault();
    }

    if (PhoneNumInput(tHomePhone) == false){
        alert("Phone number must be entered as xxx-xxx-xxxx")
        evt.preventDefault();
    }

    if (PhoneNumInput(tCellPhone) == false){
        alert("Phone number must be entered as xxx-xxx-xxxx")
        evt.preventDefault();
    }

    if (IsValidEmail(tEmail) == false) {
        alert("Invalid Email address");
        evt.preventDefault();
    }

    if (CreditInput(tCredit) == false){
        alert("Credit must be an integer 0 or greater.")
        evt.preventDefault();
    }

    if (HouseholdInhabInput(tHouseInhabitants) == false){
        alert("Household inhabitants must be integer greater than 0")
        evt.preventDefault();
    }

    if (GotBadWords(tNotes) == true) {
        alert("Please avoid using those words");
        evt.preventDefault();
    }



//*******************************************************************************************
   alert(`Name: ${tFirstName} ${tMiddleName} ${tLastName}`);
   alert(`\nAddress: ${tStreet1} ${tStreet2} \n\t${tCity} ${tState} ${tZip}`);
   alert(`\nHome Phone: ${tHomePhone}`);
   alert(`\nCell Phone: ${tCellPhone}`);
   alert(`\nEmail: ${tEmail}`);
   alert(`\nDOB: ${tDOB}`);
   alert(`\nCredit: ${tCredit}`);
   alert(`\nHousehold Inabitants: ${tHouseInhabitants}`);
   alert(`\nNotes: ${tNotes}`);



    // I want to ALWAYS prevent the button from moving us to the next page (page does not exist), I could get rid of the IF and just keep what is inside it
    if (false === false) {
        evt.preventDefault();
    }

};


const clearForm = () => {
    
};


document.addEventListener("DOMContentLoaded", () => {
    //hook up click events for both buttons
    $("#join_list").addEventListener("click", joinList);        //When user clicks the join_list button on the form, run the joinList function
    $("#clear_form").addEventListener("click", clearForm);

    // set focus on first text box after the form loads
    $("#first_name").focus();
});