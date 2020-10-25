import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

// let myShape: Shape = new Shape(10, 15);

// console.log(myShape.getInfo());

let myCircle: Shape = new Circle(5, 10, 20);

console.log(myCircle.getInfo());

let myRectanble: Shape = new Rectangle(0, 0, 3, 7);

console.log(myRectanble.getInfo());