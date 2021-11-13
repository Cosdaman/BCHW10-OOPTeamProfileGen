//required libraries
var inquirer = require('inquirer');
const fs = require('fs');
const questionBank = require("./src/questionBank")


function init() {
    console.log(questionBank.managerQuestions)
    console.log(questionBank.menu)
    console.log(questionBank.internQuestions)
    console.log(questionBank.engineerQuestions)
    // inquirer.prompt(managerQuestions)
    //     .then(
    //         (response) => {
    //             console.log(response)
    //         }
    //     )
    //     .catch(
    //         (error) => {
    //             if (error.isTtyError) {
    //                 console.log("error", error)
    //             } else {
    //                 console.log("something else went wrong", error)
    //             }
    //         }
    //     )
}

init();