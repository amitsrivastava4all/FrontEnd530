window.addEventListener("load", bindEvents);
function bindEvents() {
    document.querySelector("#salary").addEventListener("change", takeSalary);
}
function takeSalary() {
    var salary = document.querySelector("#salary").value;
    console.log("Salary is ", salary);
    var computeObject = new Compute();
    var result = computeObject.hra(parseInt(salary));
    console.log("Result is ", result);
}
var Compute = /** @class */ (function () {
    function Compute() {
    }
    Compute.prototype.hra = function (salary) {
        return salary * 0.30;
    };
    return Compute;
}());
