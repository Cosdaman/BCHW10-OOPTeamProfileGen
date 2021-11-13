var inquirer = require('inquirer');

const fs = require('fs');
const inquirerQuestions = [
    {
        type: "",
        message: "",
        name: ""
    },
]

function init() {
    inquirer.prompt(inquirerQuestions)
        .then(
            (response) => {
                console.log(response)
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

init();