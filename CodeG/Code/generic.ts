
class A{

}
class B extends A{

}
class C extends A{

}
class Stack<T extends A,E>{
    data:T;
    top:number;
    arr:T[];
   
    push(x:T,y:E):void{
        this.data = x;
    }
}
var stack:Stack<string,number> = new Stack<string,number>();
stack.push("Hello",10);
stack.push("Hi",20);
//stack.push(1000);

var stack2:Stack<number> = new Stack<number>();
var m:string[];
var m1:Array<string> = new Array<string>();