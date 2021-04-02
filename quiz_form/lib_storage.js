"use strict";

const storage = {

    retrieve() {
        const results = [];
        const json = localStorage.results;

        if (json) {
            const resultsArray = JSON.parse(json);

            for (let obj of resultsArray) {
                results.push(new Result(obj));
            }
        }

        return results;
    },

    store(results) {
        localStorage.results = JSON.stringify(results);
        alert(localStorage.results)
    },

    clear() {
        localStorage.results = "";
    }
};