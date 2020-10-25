import { Message } from "./Message";
import { Shape } from "./Shape";

export class Circle extends Shape implements Message {

    public messageLog(): string {
        return ("Circle message");
    }


    constructor(x: number, y: number, private _radius: number) {
        super(x, y);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(value: number) {
        this._radius = value;
    }

    public getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }

    public calculateArea(): number {

        return Math.PI * Math.pow(this._radius, 2);
    }




}