const obj={
name:'Santhosh',
id:100,
age:22,
0:'as',
location:'chennai',
learnings:['java', 'python', 'html','css','js'],
demo:()=>{
console.log("hi");
}
}
console.log(obj);
const stringobj=JSON.stringify(obj)
console.log(JSON.stringify(obj))
console.log(...obj.learnings);
var li=[]
li.push(...obj.learnings)
console.log(li);

// const data=JSON.parse(stringobj)
// console.log(data);
// console.log(data.name);
// console.log(data['age'])
// data['learnings'].forEach((li)=>{
//     console.log(li);
// })
// obj.demo()


// const obj1= {
//     element1:true,
//     check(){
//         return true
//     }
// }
// console.log(obj1.element1,obj1.check());

// obj1.add= function newelement(){
//     return 1
// }
// console.log(obj2);