"use strict";

const persons = Symbol( "persons");

const taskList = {

     [persons]: [],

    load() {
        this [persons] = storage.retrieve();
        return this;
    },

    save() {
        storage.store(this [persons]);
        return this;
    },

    sort() {
        this [persons].sort( (task1, task2) => {
            if (task1.fname < task2.fname) {
                return -1;
            }else if(task1.fname > task2.fname) {
                return 1;
            }else{
                return 0;
            }
        });
        return this;
    },

    add(task) {
        this [persons].push(task);
        return this;
    },

    delete(i) {
        this.sort();
        this [persons].splice(i, 1);
        return this;
    },

    clear (){
        storage.clear();
        return this;
    },

    *[Symbol.iterator]() {
        for (let task of this [persons]) {
            yield task;
        }
    }
};
