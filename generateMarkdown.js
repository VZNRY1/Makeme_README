// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let license;

function renderLicenseBadge(license) {
  if(license != 'none'){
    return `https://img.shields.io/badge/License-${license}-blue`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch (license) {
case "MIT":
    return "https://choosealicense.com/licenses/mit/"
    break;
case "Unilicense" :
    return 'https://choosealicense.com/licenses/unlicense/'
    break;
    case "Apache" :
  return 'https://choosealicense.com/licenses/apache-2.0/'
    break;
case "Mozilla":
    return 'https://choosealicense.com/licenses/mpl-2.0/'
    break;
  default:"None"
    break;
};
}
 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
};

renderLicenseSection();
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Descriptiom
  ${data.Description}

  ##Table of Contents
-[Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

##Usage
${data.Usage}

##Credits
${data.Credit}

##License
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

##Features
${data.Features}

##How to Contribute
${data.Contribution}

##Tests
${data.Test}


`;
}

module.exports = generateMarkdown;
