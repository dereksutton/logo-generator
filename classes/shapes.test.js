// import Circle, Square, and Triangle classes from their respective modules
const Circle = require('../classes/Circle');
const Square = require('../classes/Square');
const Triangle = require('../classes/Triangle');

// test for Circle render method
test('Circle render() method should return correct SVG string with given shape color', () => {
    // create new Circle object with specified properties
    const circle = new Circle('C', 'white', 'Circle', 'red');
    // render SVG for Circle object
    const rendered = circle.render();
    // define regular expression for Circle object's fill color
    const circleRegExp = /<circle[^>]*fill="red"[^>]*>/;
    // expect rendered SVGw to match Circle object's fill color regular expression.
    expect(rendered).toMatch(circleRegExp);
});

// test for Square render method
test('Square render() method should return correct SVG string with given shape color', () => {
    // create new Square object with specified properties
    const square = new Square('S', 'white', 'Square', 'green');
    // render SVG for Square object
    const rendered = square.render();
    // define regular expression for Square object's fill color
    const rectRegExp = /<rect[^>]*fill="green"[^>]*>/;
    // define rendered SVG to match Square object's fill color regular expression
    expect(rendered).toMatch(rectRegExp);
});

// test for Triangle render method
test('Triangle render() method should return correct SVG string with given shape color', () => {
    // create new Triangle object with specified properties
    const triangle = new Triangle('T', 'white', 'Triangle', 'blue');
    // render SVG for Triangle object
    const rendered = triangle.render();
    // define regular expression for Triangle object's fill color
    const polygonRegExp = /<polygon[^>]*fill="blue"[^>]*>/;
    // expect rendered SVG to match Triangle object's fill color regular expression
    expect(rendered).toMatch(polygonRegExp);
});