"use strict";

const $ = selector => document.querySelector(selector);

let timer = null;

let counter = 10;

const refreshPage = () => {

    counter--;

    if (counter == 0) {

        window.location.reload(true);

    } else {

        $("#seconds").textContent = counter;

    }

};

const acceptTerms = () => {

    clearInterval( timer );

    $("#terms").setAttribute("class", "hidden");

};

const toggle = evt => {

    const h2 = evt.currentTarget;

    const div = h2.nextElementSibling;

    h2.classList.toggle("minus");

    div.classList.toggle("open");

    evt.preventDefault();

};

document.addEventListener("DOMContentLoaded", () => {

    const i = window.location.href.indexOf( "accepted");

    if (i == -1) {

        timer = setTimeout( refreshPage, 5000 );

        timer = setInterval( refreshPage, 1000 );

        $("#accept").addEventListener("click", acceptTerms);

    } else {

        $("#terms").setAttribute("class", "hidden");

    }


 
    const h2Elements = faqs.querySelectorAll( "#faqs h2");

 
    for (let h2Element of h2Elements) {
 
        h2Element.addEventListener( "click", toggle);
 
    }
 
    h2Elements[0].firstChild.focus(); 

});