const {Circle, Triangle, Square} = require('./shapes.js')

// Test for triangle shape output
describe('Triangle', () => {
    it('should create a triangle SVG', () => {
        const shape = new Triangle();
        expect(shape.shapePath).toMatch('M 150,0 L 50,200 L 250,200 z');
    });
    
});

// Test for circle shape output
describe('Circle', () => {
    it('should create a circle SVG', () => {
        const shape = new Circle();
        expect(shape.shapePath).toMatch("M 150,100 m -100,0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0 z");
    });
    
});

// Test for square shape output
describe('Square', () => {
    it('should create a square SVG', () => {
        const shape = new Square();
        expect(shape.shapePath).toMatch("M 50,0 h 200 v 200 h -200 z");
    });
    
});


