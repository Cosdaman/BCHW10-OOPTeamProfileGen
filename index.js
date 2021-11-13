//required libraries
var inquirer = require('inquirer');
const fs = require('fs');
const questionBank = require("./src/questionBank")


function init() {
    console.log(questionBank)
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