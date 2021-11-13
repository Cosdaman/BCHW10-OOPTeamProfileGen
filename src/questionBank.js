//inquirer question arrays
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "mName"
    },
    // {
    //     type: "input",
    //     message: "What is the manager's ID number?",
    //     name: "mIdNum"
    // },
    // {
    //     type: "input",
    //     message: "What is the manager's email address?",
    //     name: "mEmail"
    // },
    // {
    //     type: "input",
    //     message: "What is the manager's office number?",
    //     name: "mOffice"
    // },
]

const menu = [
    {
        type: "list",
        message: "Please select an option: ",
        name: 'teamAddMenu',
        choices: ["Add engineer", "Add intern", "Finish building team"]
    }
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "eName"
    },
    // {
    //     type: "input",
    //     message: "What is the engineer's ID number?",
    //     name: "eIdNum"
    // },
    // {
    //     type: "input",
    //     message: "What is the engineer's email address?",
    //     name: "eEmail"
    // },
    // {
    //     type: "input",
    //     message: "What is the engineer's github username?",
    //     name: "eGithub"
    // },
]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "iName"
    },
    // {
    //     type: "input",
    //     message: "What is the intern's ID number?",
    //     name: "iIdNum"
    // },
    // {
    //     type: "input",
    //     message: "What is the intern's email address?",
    //     name: "iEmail"
    // },
    // {
    //     type: "input",
    //     message: "What is the intern's school?",
    //     name: "iSchool"
    // },
]

module.exports = { managerQuestions, menu, engineerQuestions, internQuestions }