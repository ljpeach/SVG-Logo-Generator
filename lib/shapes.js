class Shape {
    constructor() {
        this.color = null;
    }
    setColor(color) {
        this.color = color;
    }
    render() { }
}

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

module.exports = {
    Triangle: Triangle,
    Square: Square,
    Circle: Circle
}