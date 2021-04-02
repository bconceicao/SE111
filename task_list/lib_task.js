"use strict";

class Task {

    constructor({ description, dueDate}) {

        this.description = description;

        if (dueDate) {
            this.dueDate = new Date(dueDate);
        }else{
            this.dueDate = new Date();
            this.dueDate.setMonth(this.dueDate.getMonth() + 1);
        }
    }

    get isValid() {

        let result = true;
        const today = new Date();

        if (this.description === "") {
            result = false;
        }

        if(this.dueDate.getTime()  <= today.getTime() ) {
            result = false;
        }
        return result;
    }

    toString() {
        return `${this.description}<br>Due Date: ${this.dueDate.toDateString()}`;
    }
}

