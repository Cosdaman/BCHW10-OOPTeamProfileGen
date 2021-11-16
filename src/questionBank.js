//inquirer question arrays

//questions for managers
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the manager's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "office"
    },
]

//main menu
const menu = [
    {
        type: "list",
        message: "Select an option to add a member or finish building the team: ",
        name: 'teamAddMenu',
        choices: ["Add Engineer", "Add Intern", "Finish Building Team"]
    }
]

//questions for engineer
const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the engineer's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the engineer's github username?",
        name: "github"
    },
]

//question for intern
const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the intern's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the intern's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "school"
    },
]

module.exports = { managerQuestions, menu, engineerQuestions, internQuestions }