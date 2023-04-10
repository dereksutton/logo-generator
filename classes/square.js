// import Logo class from Logo module
const Logo = require('./Logo');

// define Square subclass of Logo
class Square extends Logo {
  // render method to create SVG for Square object
  render() {
    // destructure properties from Square object  
    const { text, textColor, backgroundColor } = this;
      // create SVG using properties
      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
      <rect x="10" y="10" width="180" height="180" fill="${backgroundColor}" />
      <text x="100" y="100" text-anchor="middle" dy=".3em" fill="${textColor}" font-size="48" font-family="Arial, sans-serif">
      ${text}
      </text>
      </svg>
    `;
  }
}


// export Square subclass for use in other modules
module.exports = Square;