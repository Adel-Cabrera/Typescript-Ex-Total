import { Message } from "./Message";
import { Shape } from "./Shape";

export class Rectangle extends Shape implements Message {

    constructor(x: number, y: number, private _width: number, private _length: number) {
        super(x, y);
    }

    messageLog(): string {
        return ("Rectangle message");
    }

    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        this._width = value;
    }

    public get length(): number {
        return this._length;
    }

    public set length(value: number) {
        this._length = value;
    }

    public getInfo(): string {
        return super.getInfo() + `, width=${this._width} , length=${this._length}`;
    }

    public calculateArea(): number {
        return this._width * this._length;
    }



}