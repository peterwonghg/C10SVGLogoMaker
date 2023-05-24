// Required modules
const fs = require('fs');
const inquirer = require('inquirer');

const { Circle, Triangle, Square } = require('./shapes/shapes');

// User input prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: function (input) {
        return input.length <= 3 ? true : 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    // Create the shape object based on the user's choice
    let shapeObj;
    switch (shape) {
      case 'circle':
        shapeObj = new Circle(shapeColor);
        break;
      case 'triangle':
        shapeObj = new Triangle(shapeColor);
        break;
      case 'square':
        shapeObj = new Square(shapeColor);
        break;
    }

    // Generate the SVG markup
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeObj.render()}
      <text x="150" y="120" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

    // Save the SVG to a file
    const fileName = 'logo.svg';
    fs.writeFile(fileName, svg, (err) => {
      if (err) {
        console.error('An error occurred while saving the SVG:', err);
      } else {
        console.log(`Generated ${fileName}`);
      }
    });
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });