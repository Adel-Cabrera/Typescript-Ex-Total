class CustomerTwo {

    private firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this._lastName = lastName;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

}

let myCustomer: CustomerTwo = new CustomerTwo("Darko", "Darkonnen");

// let myCustomer: Customer = new Customer();

// myCustomer.firstName = "martin";
// myCustomer.lastName = "dickson";

console.log(`${myCustomer.getFirstName()} ${myCustomer.lastName} `);

//  ONLY WORKS LIKE THIS -> tsc --target ES5 Customer.ts

