//required libraries
const inquirer = require('inquirer');
const questionBank = require("./src/questionBank")
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const htmlGen = require('./src/generateHTML')

//placeholder vars
let staff = [];

function managerInq() {
    inquirer.prompt(questionBank.managerQuestions)
        .then(
            (response) => {
                let newManager = new Manager(response.name, response.id, response.email, response.office)
                staff.push(newManager)
                menuInq();
            })
        .catch(
            (error) => {
                if (error.isTtyError) {
                    console.log("error", error)
                } else {
                    console.log("something else went wrong", error)
                }
            })
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
                    console.log("Creating file...")
                    createFile();
                }
            })
        .catch(
            (error) => {
                if (error.isTtyError) {
                    console.log("error", error)
                } else {
                    console.log("something else went wrong", error)
                }
            })
}

function engineerInq() {
    inquirer.prompt(questionBank.engineerQuestions)
        .then(
            (response) => {
                let newEngi = new Engineer(response.name, response.id, response.email, response.github)
                staff.push(newEngi);
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
                let newInt = new Intern(response.name, response.id, response.email, response.school);
                staff.push(newInt)
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

function createFile() {
    htmlGen(staff)
}

managerInq();