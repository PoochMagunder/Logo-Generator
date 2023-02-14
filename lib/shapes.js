class HTML {
  render(svg) {
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          ${svg}
      </body>
      </html>`;
  }
}

class Triangle {
  constructor() {
    this.shapePath = "M 150,0 L 50,200 L 250,200 z";
    return this.shapePath;
  }
}

class Square {
  constructor() {
    this.shapePath = "M 50,0 h 200 v 200 h -200 z";
    return this.shapePath;
  }
}

class Circle {
  constructor() {
    this.shapePath =
      "M 150,100 m -100,0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0 z";
    return this.shapeInput;
  }
}

class Shape {
  render(text, textColor, shapePath, shapeColor) {
    return `<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'>
    <path fill="${shapeColor}" d="${shapePath}"/>
      <text x="50%" y="50%" style="font-size: 40px;" fill="${textColor}" text-anchor="middle" alignment-baseline="middle" font-family="Zeyada">
      ${text}
      </text>
  </svg>`;
  }
}

module.exports = {HTML, Shape, Circle, Triangle, Square};
