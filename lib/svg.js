const { Triangle } = require('./shapes');

class SVG {
    constructor() {
        this.text = null;
        // 
        this.shape = null;
    }
    setText(text, color) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = text;
        this.textColor = color;
    }
    setShape(shape) {
        this.shape = shape;
    }
    render() {
        let svgShape = this.shape ? this.shape.render() : '';
        let svgText;
        if (!this.text) {
            svgText = '';
        }
        else if (this.shape && this.shape instanceof Triangle) {
            svgText = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }
        else {
            svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgShape}${svgText}</svg>`;
    }
}

module.exports = SVG;