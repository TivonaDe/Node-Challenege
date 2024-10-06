// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  'What is the title of your project?',
    'Please provide a description of your project.',
    'Please provide installation instructions.',
    'Please provide usage information.',
    'Please provide contribution guidelines.',  
    'Please provide test instructions.',
    'Please select a license.',
    'Please enter your GitHub username.',
    'Please enter your email address.',
    'Please provide a link to your github.'  
];

inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
      validate: (value) => {if(value) return true; else return 'Please enter a value';},
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
      validate: (value) => {if(value) return true; else return 'Please enter a value';},
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
      validate: (value) => {if(value) return true; else return 'Please enter a value';},
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage',
      validate: (value) => {if(value) return true; else return 'Please enter a value';},
    },
    {
      type: 'input',
      message: questions[4],
      name: 'contribution',
      validate: (value) => {if(value) return true; else return 'Please enter a value';},
    },
    {
      type: 'input',
      message: questions[5],
      name: 'test',
      validate: (value) => {if(value) return true; else return 'Please enter a value';},
    },
    {
      type: 'list',
      message: questions[6],
      name: 'license',
      choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
      type: 'input',
      message: questions[7],
      name: 'github',
      validate: (value) => {if(value) return true; else return 'Please enter a value';},
    },
    {
      type: 'input',
      message: questions[8],
      name: 'email',
      validate: (value) => {if(value) return true; else return 'Please enter a value';},
    },
    {
      type: 'input',
      message: questions[9],
      name: 'link',
      validate: (value) => {if(value) return true; else return 'Please enter a value';},
    },
  ])
    .then((response) => {
        const filename = 'newReadme.md';
        const template = generateMarkdown(response);
});
//TODO: create a table of contents with links to each section of the quetsions
const template = `# ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## C ontribution
${data.contribution}
## Test
${data.test}
## License
${data.license}
## Questions
- GitHub: [${data.github}](${data.link})
- Email: ${data.email}`;
   


// TODO: Create a function to write README file in the newReademe.md file
function writeToFile(fileName, data ) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
  


//// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const filename = 'newReadme.md';
            const template = generateMarkdown(data);
            fs.writeFile(filename, template, (err) =>
                err ? console.log(err) : console.log('Success!')
          );
        });
}

// Function call to initialize app
init();
