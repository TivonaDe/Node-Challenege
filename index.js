// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import path from 'path';
// TODO: Create an array of questions for user input


const questions = [
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: (value) => { if (value) return true; else return 'Please enter a value'; },
        },
        {
            type: 'input',
            message: 'Please provide a description of your project?',
            name: 'description',
            validate: (value) => { if (value) return true; else return 'Please enter a value'; },
        },
        {
            type: 'input',
            message: 'Please provide installation instructions?',
            name: 'installation',
            validate: (value) => { if (value) return true; else return 'Please enter a value'; },
        },
        {
            type: 'input',
            message: 'Please provide usage information?',
            name: 'usage',
            validate: (value) => { if (value) return true; else return 'Please enter a value'; },
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines?',
            name: 'contribution',
            validate: (value) => { if (value) return true; else return 'Please enter a value'; },
        },
        {
            type: 'input',
            message:   'Please provide test instructions?',
            name: 'test',
            validate: (value) => { if (value) return true; else return 'Please enter a value'; },
        },
        {
            type: 'list',
            message: 'Please select a license?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'BSD'],
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username?',
            name: 'github',
            validate: (value) => { if (value) return true; else return 'Please enter a value'; },
        },
        {
            type: 'input',
            message: 'Please enter your email address?',
            name: 'email',
            validate: (value) => { if (value) return true; else return 'Please enter a value'; },
        },
        {
            type: 'input',
            message: 'Please provide a link to your github?',
            name: 'link',
            validate: (value) => { if (value) return true; else return 'Please enter a value'; },
        },
    ];
   


// TODO: Create a function to write README file in the newReademe.md file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


//// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('Generating Professinal README.md File...');
        writeToFile("./dist/ReadME.md", generateMarkdown({ ...response }));
    });
}

// Function call to initialize app
init();