const { Triangle } = require('./shapes');
// SVG class with attributes shape, text, textColor, and shapeColor. 
// Methods are setText, setShape, and render.
class SVG {
    constructor() {
        this.text = null;
        // 
        this.shape = null;
    }
    // Set text to be displayed to text, and color them according to color argument.
    setText(text, color) {
        // text must be less than 3 characters. 
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        // Sets fields.
        this.text = text;
        this.textColor = color;
    }
    // Takes shape object, assigns it to this.shape.
    setShape(shape) {
        this.shape = shape;
    }
    render() {
        // If there is a shape, render it. If not, empty string.
        let svgShape = this.shape ? this.shape.render() : '';
        let svgText;
        // If there is no text, render text as an empty string.
        if (!this.text) {
            svgText = '';
        }
        // Square and Circle display text the same. Triangle uses slightly different
        // sets of coordinates for text to allow for best centering. Sets text to be used for text.
        else if (this.shape && this.shape instanceof Triangle) {
            svgText = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }
        else {
            svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }
        // Uses shape.render, text.render, and finally now svg.render to create the raw svg file.
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgShape}${svgText}</svg>`;
    }
}

module.exports = SVG;