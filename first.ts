var a:string = "Hello";
console.log("A is ",a);
var b:number= 100;
function test(x,y){
    return x + y;
    
}
class V{
    constructor(private a:string,private b:number){

    }
    print():void{
        console.log("A is "+this.a+" and B is "+this.b);
    }
}
const RED = 1;

enum Color  {
    RED=1, GREEN , BLUE
}


var cc:Color;
if(10>2){
cc=Color.RED;
console.log("CC is ",cc);
}
switch(cc){
    case Color.RED:
    console.log("U Choose RED");
    break;
    case Color.GREEN:
    console.log("U Choose GREEN");
    break;
    case Color.BLUE:
    console.log("U Choose GREEN");
    break;

}


var ff:V = new V("Hello",10);
ff.print();
type mytype = {a:string,b:number};
var r:mytype = {a:"Hello",b:200};
delete r.a;
//r.z:number=900;
console.log("R is ",r);
test(100,200);
test("Hello","Ok");
//b = "Hello";
console.log("B is ",b);
function add(x:number, y:number):number{
    return x + y;

}

var fn:(x:number,y:number)=>number = add;
var z:number = add(100,200);
console.log("Z is ",z);