//import files
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
const fs = require('fs');

//html placeholders
let htmlfileOpen = `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Team Profile Generator</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body style="background-color: #96E072;">
<nav class="navbar navbar-dark bg-dark d-flex">
    <div class="container-fluid justify-content-center">
        <span class="navbar-brand mb-0 h1">Team Profile</span>
    </div>
</nav>

<div class="container d-flex flex-column align-items-center">
`

let engineerHtmlOpen = `<div class="row">
<div id="engineer" class="col-6 d-flex flex-wrap justify-content-around">
<h2 class="col-12" style="text-align: center;">Engineers</h2>`


let engineerContent = "";

let engineerHtmlClose = `</div>`

let internHtmlOpen = `<div id="intern" class="col-6 d-flex flex-wrap justify-content-around">
<h2 class="col-12" style="text-align: center;">Interns</h2>`

let internContent = "";

let internHtmlClose = `</div>
</div>`

let htmlfileClose = `
</div>
</body>
</html>`



function generateHtml(staffArr) {

    staffArr.forEach(element => {
        for (const key in element) {
            if (element[key] == "") {
                element[key] = "N/A"
            }
        }
        if (element instanceof Manager) {
            htmlfileOpen += `
            <div id="manager" class="row justify-content-center">
            <h1 class="col-12" style="text-align: center;">Manager</h1>
            <div class="card" style="width: 18rem;background-color: #273C2C; color: #FFFFFF;">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <h6 class="card-subtitle mb-2 fw-bolder">${element.getRole()}</h6>
                    <p class="card-text">ID: ${element.id}</p>
                    <p class="card-text">Office: ${element.officeNum}</p>
                    <p class="card-text">Email: <a class="link-light" href="mailto:${element.email}" target="_blank">${element.email}</a></p>
            </div>
        </div>
    </div>
`
        } else if (element instanceof Engineer) {
            engineerContent += `
<div class="card col-3" style="width: 18rem;background-color: #3E8914; color: #FFFFFF;">
<div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <h6 class="card-subtitle mb-2 fw-bolder">${element.getRole()}</h6>
    <p class="card-text">ID: ${element.id}</p>
    <p class="card-text">Github: <a class="link-light" href="https://github.com/${element.github}" target="_blank">${element.github}</a></p>
    <p class="card-text">Email: <a class="link-light" href="mailto:${element.email}" class="card-link">${element.email}</a></p>
</div>
</div>
`
        } else if (element instanceof Intern) {
            internContent += `
<div class="card col-3" style="width: 18rem;background-color: #3DA35D; color: #FFFFFF;">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <h6 class="card-subtitle mb-2 fw-bolder">${element.getRole()}</h6>
                <p class="card-text">ID: ${element.id}</p>
                <p class="card-text">School: ${element.school}</p>
                <p class="card-text">Email: <a class="link-light" href="mailto:${element.email}" class="card-link">${element.email}</a></p>
            </div>
            </div>
            `
        }
    });

    let engineerHtml = engineerHtmlOpen + engineerContent + engineerHtmlClose;
    let internHtml = internHtmlOpen + internContent + internHtmlClose;

    fs.writeFile(
        `./dist/TeamProfile.html`,
        `${htmlfileOpen}\n${engineerHtml}\n${internHtml}\n${htmlfileClose}`,
        (err) => err ? console.error(err) : console.log("html generated")
    );
}


module.exports = generateHtml