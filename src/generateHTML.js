//import files
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
const fs = require('fs');



function generateHtml(staffArr) {
    let engineerHtml = "";
    let internHtml = "";
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

<body>`

    let htmlfileClose = `
</body>
</html>`

    staffArr.forEach(element => {
        if (element instanceof Manager) {
            htmlfileOpen += `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${element.getRole()}</h6>
        <p class="card-text">ID: ${element.id}.</p>
        <p class="card-text">Office: ${element.officeNum}</p>
        <a href="mailto:${element.email}" class="card-link">${element.email}</a>
    </div>
</div>`
        } else if (element instanceof Engineer) {
            engineerHtml += `<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${element.getRole()}</h6>
    <p class="card-text">ID: ${element.id}.</p>
    <p class="card-text">Github: <a href="https://github.com/${element.github}" class="card-link">${element.github}</a></p>
    <a href="mailto:${element.email}" class="card-link">${element.email}</a>
</div>
</div>`
        } else if (element instanceof Intern) {
            console.log("intern")
        }
    });

    fs.writeFile(
        `./dist/TeamProfile.html`,
        `${htmlfileOpen}\n${engineerHtml}\n${htmlfileClose}`,
        (err) => err ? console.error(err) : console.log("html generated")
    );
}


module.exports = generateHtml