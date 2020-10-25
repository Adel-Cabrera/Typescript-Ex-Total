export class Person {

    constructor(private _name: string, private _age: number) { }

    public get name(): string {
        return this._name;
    }

    public get age(): number {
        return this._age;
    }

    public set name(value: string) {
        this._name = value;
    }

    public set age(value: number) {
        this._age = value;
    }


}

