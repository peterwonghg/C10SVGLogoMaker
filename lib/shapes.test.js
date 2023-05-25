const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  describe('render', () => {
    test('should render a circle with the specified color', () => {
      const circle = new Circle('blue');
      const svg = circle.render();
      expect(svg).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
    });
  });
});

describe('Triangle', () => {
  describe('render', () => {
    test('should render a triangle with the specified color', () => {
      const triangle = new Triangle('red');
      const svg = triangle.render();
      expect(svg).toEqual('<polygon points="150,50 100,150 200,150" fill="red" />');
    });
  });
});

describe('Square', () => {
  describe('render', () => {
    test('should render a square with the specified color', () => {
      const square = new Square('green');
      const svg = square.render();
      expect(svg).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
    });
  });
});
