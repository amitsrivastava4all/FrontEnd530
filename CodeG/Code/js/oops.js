var Emp = /** @class */ (function () {
    function Emp(_id, name, salary) {
        this._id = _id;
        this.name = name;
        this.salary = salary;
    }
    Emp.prototype.print = function () {
        console.log("Id " + this._id + " Name " + this.name + " Salary " + this.salary);
    };
    Object.defineProperty(Emp.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            if (id > 0) {
                this._id = id;
            }
            else {
                this._id = 0;
                console.log("Invalid Id..");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Emp;
}());
var ram = new Emp(1001, "Ram", 9090);
ram.id = -1002;
ram.print();
