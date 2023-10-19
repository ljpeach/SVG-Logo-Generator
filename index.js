// Import packages for main functions. Inquirer for user input, writefile for saving results, rest for generating the SVG. 
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Triangle, Square, Circle } = require('./lib/shapes');
const SVG = require('./lib/svg');

// Create list of prompts for inquirer to use to get what the user wants their logo to be.
const logoQuestions = [
    {
        type: 'input',
        message: 'Enter your text (up to 3 chars)',
        name: 'text',
        // Ensures the user has not input more than 3 chars. 
        filter: (input) => new Promise((resolve, reject) => {
            if (input.length > 3) { throw new Error("Text must not exceed 3 characters."); }
            resolve(input);
        })
    },
    {
        type: 'input',
        message: 'Input a color keyword or hexadecimal number for your text color.',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Pick a background shape.',
        choices: ['Square', 'Triangle', 'Circle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Input a color keyword or hexadecimal number for your background shape.',
        name: 'shapeColor',
    },
];

// main function call.
function init() {
    // Gather user input
    inquirer.prompt(logoQuestions)
        .then((response) => {
            const svgObj = new SVG();
            var shapeObj;
            // Creates correct shape based on user input.
            switch (response.shape) {
                case 'Triangle':
                    shapeObj = new Triangle();
                    break;
                case 'Square':
                    shapeObj = new Square();
                    break;
                case 'Circle':
                    shapeObj = new Circle();
                    break;
                default:
                    throw new Error('Invalid Shape');
            }
            // Applies user criteria. 
            shapeObj.setColor(response.shapeColor);
            svgObj.setShape(shapeObj);
            svgObj.setText(response.text, response.textColor);
            // Writes rendered SVG object to logo.svg.
            return writeFile('logo.svg', svgObj.render());
        })
        // Either displays error if something went wrong, or displays generated logo.svg if everything worked.
        .then((err) => err ? console.err(err) : console.log('Generated logo.svg'));
}

init();