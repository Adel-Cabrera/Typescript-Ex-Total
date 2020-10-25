"use strict";
var CustomerTwo = /** @class */ (function () {
    function CustomerTwo(firstName, lastName) {
        this.firstName = firstName;
        this._lastName = lastName;
    }
    CustomerTwo.prototype.getFirstName = function () {
        return this.firstName;
    };
    CustomerTwo.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Object.defineProperty(CustomerTwo.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerTwo;
}());
var myCustomer = new CustomerTwo("Darko", "Darkonnen");
// let myCustomer: Customer = new Customer();
// myCustomer.firstName = "martin";
// myCustomer.lastName = "dickson";
console.log(myCustomer.getFirstName() + " " + myCustomer.lastName + " ");
//  ONLY WORKS LIKE THIS -> tsc --target ES5 Customer.ts
