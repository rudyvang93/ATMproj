"use strict"
const prompt = require("prompt-sync")();
const account = require("./account.js")



//all functions adding or withdrawing
//function atm(money)




function menu(){
    let isValidPin = validatePin();
    if(isValidPin === true){
        
    }
}

function bankAtm(){
    var choice = parsenInt(prompt("Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit")); 
    if (choice === 1) {
        get_balance();
    }else if(choice ===2) {
        make_deposit();
    }else if(choice === 3){
        make_withdrawal();
    }else if(choice === 4){
        exit();
    }else {
        error();
    }
    }
    
    



function validatePin(){
    let userInput = prompt("insert Pin number");
    if(parseInt(userInput) === account.pin) {
        return true;
    }
    else {
        return validatePin();
    }
}



function withDraw() {
    let userInput = prompt("How much would you like to take out?");

    if(parseInt(userInput + 4) ===account.balance){
        return true;
    }
    else{
        balance -= withDraw;

    } findBalance();
}





function findBalance(){
    console.log("Balance amount is", + balance);
}

function exit(){
    var confirmExit = prompt("You have selected exit.");
    if (confirmExit) {

    } else{ userInput 
        atm();
    }
}

module.exports.menu = menu;
module.exports.bankAtm = bankAtm
module.exports.withDraw =withDraw
module.exports.exit = exit
module.exports.validatePin = validatePin
module.exports.findBalance = findBalance