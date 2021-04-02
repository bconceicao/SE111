"use strict";

const results = Symbol( "results");

const resultsList = {

     [results]: [],

    load() {
        this [results] = storage.retrieve();
        return this;
    },

    save() {
        storage.store(this [results]);
        return this;
    },

    sort() {
        this [results].sort( (result1, result2) => {
            if (result1.name < result2.name) {
                return -1;
            }else if(result1.name > result2.name) {
                return 1;
            }else{
                return 0;
            }
        });
        return this;
    },

    add(result) {
        this [results].push(result);
        return this;
    },

    delete(i) {
        this.sort();
        this [results].splice(i, 1);
        return this;
    },

    clear (){
        storage.clear();
        return this;
    },

    *[Symbol.iterator]() {
        for (let result of this [results]) {
            yield result;
        }
    }
};
