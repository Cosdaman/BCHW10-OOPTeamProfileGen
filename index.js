//required libraries
var inquirer = require('inquirer');
const fs = require('fs');
const questionBank = require("./src/questionBank")

function managerInq() {
    inquirer.prompt(questionBank.managerQuestions)
        .then(
            (response) => {
                console.log(response);
                menuInq();
            }
        )
        .catch(
            (error) => {
                if (error.isTtyError) {
                    console.log("error", error)
                } else {
                    console.log("something else went wrong", error)
                }
            }
        )
}

function menuInq() {
    inquirer.prompt(questionBank.menu)
        .then(
            (response) => {
                if (response.teamAddMenu.includes('Engineer')) {
                    engineerInq();
                } else if (response.teamAddMenu.includes('Intern')) {
                    internInq();
                } else {
                    console.log("finish")
                }
            }
        )
        .catch(
            (error) => {
                if (error.isTtyError) {
                    console.log("error", error)
                } else {
                    console.log("something else went wrong", error)
                }
            }
        )
}

function engineerInq() {
    inquirer.prompt(questionBank.engineerQuestions)
        .then(
            (response) => {
                console.log(response)
                menuInq();
            }
        )
        .catch(
            (error) => {
                if (error.isTtyError) {
                    console.log("error", error)
                } else {
                    console.log("something else went wrong", error)
                }
            }
        )
}
function internInq() {
    inquirer.prompt(questionBank.internQuestions)
        .then(
            (response) => {
                console.log(response)
                menuInq();
            }
        )
        .catch(
            (error) => {
                if (error.isTtyError) {
                    console.log("error", error)
                } else {
                    console.log("something else went wrong", error)
                }
            }
        )
}

managerInq();