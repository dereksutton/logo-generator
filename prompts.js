const qs = [
    {
        type: "input",
        name: "userText",
        message: "Please enter the text for your logo (3 character limit):",
        validate: function(value) {
            return (value.length <= 3) || 'Invalid entry! (3 characters max)';
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter your text color by name or hexidecimal value:",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter your shape color by name or hexidecimal value:",
    },
    {
        type: "list",
        name: "logoShape",
        message: "Please select a shape for your logo:",
        options: [
            {name: "Square"},
            {name: "Circle"},
            {name: "Triangle"}
        ],
    },
];

module.exports = qs;