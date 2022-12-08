// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const  generatemarkdown  = require('./generateMarkdown');

 
    inquirer
        .prompt([
        {
            type:'input',
            name:'Document Title',
            message:'"What is the tile of your Project?',
        },
        {
            type:'input',
            name:'Description',
            mesage:"Describe your project(why did you build this project and what was the motivation)?",
        },
        {
            type:'input' ,
            name:'Installation',
            message:'What are the steps required to install your project? Please provide a step by step!',
            default: "npm i"
        },
        {
            type:'input',
            name:'Usage',
            message:'Please provide instructions and examples for use of your application!',
        },
        {
            type:'input',
            name:'Credit',
            message:'List your collaborators with links to their Github profiles.',
        },
        {
            type:'input',
            name:'Features',
            message:'List the features of your project',
        },
        {
            type:'input',
            name:'Contribution',
            message:'If you would like Contributions tell us how here, and the guidelines for doing so',
        },
        {
            type:'input',
            name:'Test',
            message:'How can the user test this application?'
        },

    ])
    .then((answers) => {

        let newfile = generatemarkdown(answers);
    
        fs.writeFile('README.md', newfile, (err) =>
    err ? console.log(err) : console.log('Success!')
        );
})


// const makeMeRead = () => {
//     createReadme()

    
    
// };

//makeMeRead();

// TODO: Create an array of questions for user input
// const questions = [
//     //description
//     "Describe your project(why did you build this project and what was the motivation)?",
//     //Table of Contents

//     //Installation
//     "what are the steps required to install your projects? Please provide a step by step!",
//     //Usage
// "Please provide instructions and examples for use of your application",
//     //Credits
// "List your collaborators with links to their Github profiles.",
//     //License
//     //Badges
//     //Features
// "List the freatures of your project, if any",
//     //How to Contribute
//     "If you would like Contributions tell us how here, adn the guidelines for doing so",
//     //tests
// ];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
