
console.log('San'.match(/^[Ss]an$/g));

var [x,y]=[2,4]
console.log(x,y);
//enhanced object properties
var obj={x,y}//shorthand property
console.log(obj);
const key='as'
obj={[key+key]:'name'}//computed property name
console.log(obj);

obj={               //Methord property
    fun1(){
        console.log(1);
    },
    fun2(){
        console.log(2);
    },fun3(){
        console.log(3);
    }
}
obj.fun1();
obj={
    fruit:{
        apple:{color:'red',price:50},
        orange:{color:'orange',price:60}
    }
}
console.log(obj.fruit.apple.price==50);//
obj.veg={carrot:{color:'orange',price:30}}
console.log(obj);
//Destructuring assignment

var {veg,fruit}=obj//shorthand matching
console.log(fruit,veg);

var{fruit:{apple:apple}}=obj    //deepmatching
console.log('-----------------------------\n',apple,);

function f([a,b]){//Parameter context matching
    console.log(a,b);
}
function f1({name:a,age:b}){
    console.log(a,b);
}
function f2({name,age}){
    console.log(name,age);
}
f(['Aspire',1])
f1({name:'san',age:'123'})
f2({name:'san',age:'123'})

var list=['1','escape']//Failsoft matching
var [a=1,b=2,c=3,d=4,e]=list
console.log(a,b,c,d,e);
console.log(Object.keys(list));
// export var obj;