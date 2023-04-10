// import Logo class from Logo module
const Logo = require('./Logo');

// define Circle subclass of Logo
class Circle extends Logo {
    // render method to create SVG for Circle object
    render() {
        // destructure properties from Circle object
        const { text, textColor, backgroundColor } = this;
        // create SVG using properties
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
        <circle cx="150" cy="100" r="90" fill="${backgroundColor}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}" font-size="48" font-family="Arial, sans-serif">
        ${text}
        </text>
        </svg>
      `;
    }
}


// export Circle subclass for use in other modules
module.exports = Circle;