const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Triangle, Square, Circle } = require('./lib/shapes');
const SVG = require('./lib/svg');

const logoQuestions = [
    {
        type: 'input',
        message: 'Enter your text (up to 3 chars)',
        name: 'text',
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

function init() {
    inquirer.prompt(logoQuestions)
        .then((response) => {
            const svgObj = new SVG();
            var shapeObj;
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
            }
            shapeObj.setColor(response.shapeColor);
            svgObj.setShape(shapeObj);
            svgObj.setText(response.text, response.textColor);

            return writeFile('logo.svg', svgObj.render());
        })
        .then((err) => err ? console.err(err) : console.log('Generated logo.svg'));
}

init();