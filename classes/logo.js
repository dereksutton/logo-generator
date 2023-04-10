// define Logo class
class Logo {
    // constructor to initialize object properties
    constructor(userText, textColor, userShape, backgroundColor) {
        // set text property
        this.text = userText;
        // set textColor property
        this.textColor = textColor;
        // set shape property
        this.shape = userShape;
        // set backgroundColor property
        this.backgroundColor = backgroundColor;
    }

    // method to create SVG for logo
    makeSVG() {
        // throw error if makeSVG() is not implemented in a subclass
        throw new Error('makeSVG() must be implemented in a subclass.');
    }
}

// export Logo class for use in other modules
module.exports = Logo;