var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this._lastName = lastName;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Darko", "Darkonnen");
// let myCustomer: Customer = new Customer();
// myCustomer.firstName = "martin";
// myCustomer.lastName = "dickson";
console.log(myCustomer.getFirstName() + " " + myCustomer.lastName + " ");
