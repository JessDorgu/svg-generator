class Shapes {
  constructor(shape, text, textColor, setColor) {
    this.shape = shape;
    this.text = text;
    this.textColor = textColor;
    this.setColor = setColor;
  }

  render() {
    let shape = "";
    switch (this.shape) {
      case "square":
        shape = new Square().render(this.setColor);
        break;
      case "triangle":
        shape = new Triangle().render(this.setColor);
        break;
      case "circle":
        shape = new Circle().render(this.setColor);
        break;
      default:
        shape = new Square().render(this.setColor);
    }

    return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${shape}
<text x="140" y="120" font-size="50" text-anchor="middle" fill="${this.textColor}"> ${this.text} </text>
</svg>`;
  }
}

class Square extends Shapes {
  render(setColor) {
    return `<rect x="10" y="10" width="300" height="300" fill="${setColor}"/>`;
  }
}
class Triangle extends Shapes {
  render(setColor) {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${setColor}"/>`;
  }
}
class Circle extends Shapes {
  render(setColor) {
    return `<circle cx="25" cy="75" r="200" fill="${setColor}"/>`;
  }
}

module.exports = { Shapes, Square, Circle, Triangle };
