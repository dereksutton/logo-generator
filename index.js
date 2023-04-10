// import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./classes/Circle');
const Square = require('./classes/Square');
const Triangle = require('./classes/Triangle');

// function to get user input 
async function getUserInput () {
    const qs = [
        // define input prompt for userText
        {
            type: 'input',
            name: 'userText',
            message: 'Enter the text for your logo (3 characters max):',
            validate: input => input.length <= 3 || 'Invalid entry! Text must be 3 characters or less.',
        },
        // define input prompt for textColor
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter your text color of choice (e.g., red, blue, #123456, rgb(255, 0, 0)):',
            validate: function (value) {
                if (value) {
                    return true;
                } else {
                    return 'Please enter a valid color.';
                }
            },

        },
        // define input prompt for backgroundColor
        {
            type: 'input',
            name: 'backgroundColor',
            message: 'Enter your background color of choice (e.g., black, green, #123456, rgb(255, 0, 0)):',
            validate: function (value) {
                if (value) {
                    return true;
                } else {
                    return 'Please enter a valid color.';
                }
            },
        },
        // define list prompt for userShape
        {
            type: 'list',
            name: 'userShape',
            message: 'Select a shape for your shape:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        
    ];

    // return user input using inquirer prompt
    return await inquirer.prompt(qs);
}

// function to create logo based on user input
function createLogo({ userText, textColor, userShape, backgroundColor }) {
    switch (userShape) {
        // create Circle object
        case 'Circle':
            return new Circle(userText, textColor, userShape, backgroundColor);
        // create Square object
        case 'Square':
            return new Square(userText, textColor, userShape, backgroundColor);
        // create Triangle object
        case 'Triangle':
            return new Triangle(userText, textColor, userShape, backgroundColor);
        // throw error if invalid shape is specified
        default:
            throw new Error('Invalid shape specified');
    }
}

// function to save SVG to file
function saveSvgToFile(svg, fileName) {
    fs.writeFile(fileName, svg, (err) => {
        if (err) {
            console.error('Error saving SVG file:', err);
        } else {
            console.log('SVG file successfully saved as ${fileName}');
        }
    });
}

// immediately-invoked async function to execute code
(async () => {
    try {
        // get user input
        const userInput = await getUserInput();
        console.log(userInput);
        // create logo object
        const logo = createLogo(userInput);
        // render SVG from logo object
        const svg = logo.render();
        // save SVG to file
        saveSvgToFile(svg, 'logo.svg');
    } catch (err) {
        console.error('Error:', err.message);
    }
})();