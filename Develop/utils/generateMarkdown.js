// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `


  # ${data.title},
  http://github.com/${data.Username}/${data.title},

  ## Description 

  ${data.description},
  #Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contribution](#contribution)
  *[Tests](#tests)
  *[Questions](#questions)


  ## Installation
 You must have the following necessary dependencies installed in order to run the application
  

  ## Usage

 In order to use and access this application ${data.usage},

 ## License
  This project is licensed under the ${data.license},

  ## Contributing
 Contributors ${data.contributing},

  ## Tests
  The following is needed to run the test ${data.tests},

  ## Questions
  Any questions or issues you might have about the repo for this application, please contact ${data.Username} at  ${data.email},

  `;
}

module.exports = generateMarkdown;
