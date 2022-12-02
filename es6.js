const num=1.12334567
console.log(num);
{
    var b=10
    let c=10
   const a= ()=>{
        console.log("hi",c);
    }
    a()
}
function variable() {
    
    var san="hello"
    function test(){
        console.log(san);
    }
    test()
}
console.log(variable.toString());
console.log(b);
 {
    console.log("hii");
}
const obj={
    name:"Santhosh",
    fun1:()=>{
        console.log("fun1");
    }
}
obj.fun1()
obj.fun2=()=>{
    console.log("fun2");
}
obj.fun2()
console.log(obj);
//-------------------------------------------------------------------------------------------------------
var as=20
let bs=50
const cs=70
{
    var as=10
    let bs=30
    const cs=20
}
console.log(as);
//-------------------------------------------------------------------------------------------------------
