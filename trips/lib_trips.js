"use strict"

class Trip{

    constructor(destination,miles,gallons) {
        this.destination = destination;

        this.miles = parseFloat(miles);
        this.gallons = parseFloat(gallons);
    }

    get isValid() {
        let result = true;

        if (this.destination == "" || isNaN(this.gallons) || isNaN(this.miles)){
            result = false;
        }else if (this.gallons <= 0 || this.miles <= 0 ){
            result = false;
        }else{
            result = true;
        }
        return result;
    }

    get mpg() {
        return this.miles / this.gallons;
    }

    toString(){
        const mpg = this.mpg.toFixed(1);
        return `${this.destination}: Miles - ${this.miles}; MPG - ${mpg}`;
    }
}

class Trips {

    constructor() {
        this._trips = [];
    }

    push(trip) {
        if (trip instanceof Trip) {
            this._trips.push(trip);
        }
    }

    get totalMPG() {
        let totalMiles = 0;
        let totalGallons = 0;

        for(let trip of this._trips) {
            totalMiles += trip.miles;
            totalGallons += trip.gallons;
        }
        return totalMiles / totalGallons;
    }

    toString(){
        let str = "";
        for (let trip of this._trips) {
            str += trip.toString() + "\n";
        }
        str += "\nCumulative MPG: " + this.totalMPG.toFixed(1);
        return str;
    }
}