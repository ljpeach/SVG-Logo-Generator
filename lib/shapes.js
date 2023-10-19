// Shape class. Has attribute color and methods setColor (sets shape's fill color) and render (creates svg text needed to display)
class Shape {
    constructor() {
        this.color = null;
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        throw new Error('Child class must implement render method.');
    }
}

// Following functions extend Shape. Only difference is in how the shape is rendered. 
class Triangle extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Exports shape classes that have inherited from shape.
module.exports = {
    Triangle: Triangle,
    Square: Square,
    Circle: Circle
}