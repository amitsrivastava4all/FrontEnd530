class Emp{
    private salary:number;
    constructor(private _id:number, private name:string,salary:number){
    this.salary =salary;
    }
    print():void{
        console.log(`Id ${this._id} Name ${this.name} Salary ${this.salary}`);
    }
    public set id(id:number):void{
        if(id>0){
        this._id = id;
        }
        else{
            this._id=0;
            console.log("Invalid Id..");
        }
    }
    public get id():number{
        return this._id;
    } 
}
var ram:Emp = new Emp(1001,"Ram",9090);
ram.id=-1002; 
ram.print();