// TODO: Include packages needed for this application
const fs= require ("fs");
const inquirer= require ("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [

{
    type:"input",
    message: "What is your project titled?",
    name: "title",
},

{
    type: "input",
    name: "description",
    message: "Please describe the purpose of this project. Give a detailed description of your project",
    
},

{
    type: "input",
    name: "Table of Contents",
    message: "Table of Contents",

},

{
    type: "input",
    name: "Installation",
    message: "What does the user need to do in order to install the app to run properly?",

},

{

    type: "input",
    name: "Usage",
    message: "How is the app used? Please give instructions",

},

{

    name: "license",
    message: "Please select an applicable license for this project.",
    options: ["MIT", "Apache2.0", "GNU General Public License v3.0", "BSD2", "BSD3", "Eclipse Public License","None"],
},

{
    type: "input",
    name: "Contribution",
    message: "Who contributed to this project?",

},

{
    type: "input",
    name: "Tests",
    message: "What commands are needed in order to run this application?",

},

{
    type: "input",
    name: "Questions",
    message: "Contact info for inquiries",

},

{
    type: "input",
    name: "Github Username",
    message: "What is your github username?",

},

    {
        type: "input",
        name: "Email Address",
        message: "What is your email address?",

    },




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, function (err) {
    console.log(fileName)
    console.log(data)
    if (err) {
        return console.log(err)

    } else {
        console.log("Success!")
    }
})
        





}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })

}

// Function call to initialize app
init();
