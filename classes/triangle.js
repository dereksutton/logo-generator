// import Logo class from Logo module
const Logo = require('./Logo');

// define Triangle subclass of Logo
class Triangle extends Logo {
  // render method to create SVG for Triangle object
  render() {
      // destructure properties from Triangle object
      const { text, textColor, backgroundColor } = this;
      // create SVG using properties
      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
      <polygon points="150, 18 244, 182 56, 182" fill="${backgroundColor}" />
      <text x="150" y="125" text-anchor="middle" dy=".3em" fill="${textColor}" font-size="48" font-family="Arial, sans-serif">
      ${text}
      </text>
      </svg>
    `;
  }
}


// export Triangle subclass for use in other modules
module.exports = Triangle;