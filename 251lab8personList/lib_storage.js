"use strict";

const storage = {

    retrieve() {
        const persons = [];
        const json = localStorage.persons;

        if (json) {
            const taskArray = JSON.parse(json);

            for (let obj of taskArray) {
                persons.push(new Task(obj));
            }
        }

        return persons;
    },

    store(persons) {
        localStorage.persons = JSON.stringify(persons);
        alert(localStorage.persons)
    },

    clear() {
        localStorage.persons = "";
    }
};