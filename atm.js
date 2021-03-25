"use strict"
const balance = require("./account.js")
//all functions adding or withdrawing
function atm(money)

const prompt = require("prompt-sync")();



function validatePin(){
    let userinput = prompt("insert Pin number");
    if(parseInt(userinput, 10) === account.pin) {
        return true;
    }
    else {
        validatePin();
    }
}

