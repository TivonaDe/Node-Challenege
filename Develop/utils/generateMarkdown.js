// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GPL") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "BSD") {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else {
    return "";
  }
}
// If there is no license, return an empty string
function noLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPL") {
    return `[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "BSD") {
    return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return "";
  }
}
// If there is no license, return an empty string
function noLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `MIT License`;
  } else if (license === "Apache") {
    return `Apache License 2.0`;
  } else if (license === "GPL") {
    return `GPL v3 License`;
  } else if (license === "BSD") {
    return `BSD 3-Clause License`;
  } else {
    return "";
  }
}
// If there is no license, return an empty string
function noLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## License
  ${renderLicenseSection(data.license)}
  ## Questions
  - [GitHub](
  ${data.github})
  - Email: ${data.email}
  - [Link](
  ${data.link})

`;
}

module.exports = generateMarkdown;
