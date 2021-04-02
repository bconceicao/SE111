"use strict";

const storage = {

    retrieve() {
        const tasks = [];
        const json = localStorage.tasks;

        if (json) {
            const taskArray = JSON.parse(json);

            for (let obj of taskArray) {
                tasks.push(new tasks(obj));
            }
        }

        return tasks;
    },

    store(tasks) {
        localStorage.tasks = JSON.stringify(tasks);
        alert(localStorage.tasks)
    },

    clear() {
        localStorage.tasks = "";
    }
};