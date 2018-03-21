interface X{
    a:number;
    b:number;
}
interface Z{
   show():void;

}
interface Z2 extends Z{

}
interface YY {
    (a:number,b:number):number;
}
var n:YY =(a:number,b:number):number=>a+b;
var g:YY = (a:string)=>a;
class Z1 implements Z{
    show():void{
        console.log("Show....");
    }
}


function addition(y:X):number{
   return y.a + y.b;

}
addition ({a:100,b:20});
//addition (10,20);