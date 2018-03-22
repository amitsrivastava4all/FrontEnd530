window.addEventListener("load",bindEvents);
function bindEvents():void{
    document.querySelector("#salary").addEventListener("change",takeSalary);
}
function takeSalary():void{
    var salary:string = document.querySelector("#salary").value;
    console.log("Salary is ",salary);
    var computeObject:Compute = new Compute();
    var result:number= computeObject.hra(parseInt(salary));
    console.log("Result is ",result);

}

class Compute{
    hra(salary:number):number{
        return salary * 0.30;
    }
}