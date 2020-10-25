import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';


// let myShape: Shape = new Shape(10, 15);
let myCircle: Circle = new Circle(5, 10, 20);
let myRectanble: Rectangle = new Rectangle(0, 0, 3, 7);

let theShapes: Shape[] = [];

// theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectanble);

console.log(theShapes);
console.log(myCircle.calculateArea());
console.log(myRectanble.calculateArea());
console.log(myCircle.messageLog());
console.log(myRectanble.messageLog());