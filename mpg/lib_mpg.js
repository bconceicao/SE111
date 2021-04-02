"use strict";


const mpg = {
    miles: 0,
    gallons: 0,

    get isValid() {
        let result = true;
        if (isNaN(this.miles) || isNaN(this.miles)) {
            result = false; 
        } else if (this.miles <= 0 || this.gallons <=0){
            result = false;
        }else{
            result = true;
        }
        return result;
    },

    calculate(){
        return this.miles / this.gallons;
    }
};