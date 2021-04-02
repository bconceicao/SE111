"use strict";

class Task {

    constructor({ fname, mname, lname, street_1, street_2, nCity, nState, zipCode, homePhone, cellPhone, workPhone, nEmail, d_o_b, nCredit, houseInhab, nNotes }) {

        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
        this.street_1 = street_1;
        this.street_2 = street_2;
        this.nCity = nCity;
        this.nState = nState;
        this.zipCode = zipCode;
        this.homePhone = homePhone;
        this.cellPhone = cellPhone;
        this.workPhone = workPhone;
        this.nEmail = nEmail;
        this.d_o_b = d_o_b;
        this.nCredit = nCredit;
        this.houseInhab = houseInhab;
        this.nNotes = nNotes;
    }

    get isValid() {

        let result = true;
        const today = new Date();

        if (this.fname === "") {
            result = false;
        }
        
        if(this.lname === "")  {
            result = false;
        }

        if(this.street_1 === "") {
            result = false;
        }

        if(this.nCity === "") {
            result = false
        }

        if(this.nState.length != 2) {
            result = false
        }

        if(this.zipCode.length != 5) {
            result = false
        }

        if(this.homePhone.length != 10){
            result = false
        }

        if(this.cellPhone.length != 10){
            result = false
        }

        if(this.nEmail === "") {
            result = false
        }

        if(this.d_o_b === "") {
            result = false
        }

        if(this.nCredit === "") {
            result = false
        }

        if(this.houseInhab === "") {
            result = false
        }

        return result;

    }

    toString() {
        return `First Name: ${this.fname}<br>Middle Name: ${this.mname}<br>Last Name: ${this.lname}<br>Street 1: ${this.street_1}<br>Street 2: ${this.street_2}<br>City: ${this.nCity}<br>State: ${this.nState}<br>Zip Code: ${this.zipCode}<br>Home Phone: ${this.homePhone}<br>Cell Phone: ${this.cellPhone}<br>Work Phone: ${this.workPhone}<br>Email: ${this.nEmail}<br>Date of Birth: ${this.d_o_b}<br>Credit: ${this.nCredit}<br>Household Inhabitants: ${this.houseInhab}<br>Notes: ${this.nNotes}`;
    }
}

