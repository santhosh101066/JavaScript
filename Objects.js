//Object prototype constructor
const obj1 = {}
console.log(obj1.constructor == Object);

const obj2 = []
console.log(obj2.constructor == Array)

const obj3 = 1
console.log(obj3.constructor == Number)

//Object Assign

const obj4 = { a: 1, b: 5 }
console.log(Object.assign(obj4, { b: 10, c: 20, d: 40 }) === obj4);
console.log(obj4);

//Object Create 

const person = {
    name: 'Santhosh'
}
person.age = 12
const me = Object.create(person)
console.log(me === person);

console.log(me.constructor, person.constructor);
console.log(me.name, person.name);


// define properties

// const Person = { area: 'Siruseri' }
// Object.defineProperties(Person, { company1: { value: 'Aspire', writable: false }, company2: {} })
// console.log(Person.company1 = 'TCS');
// console.log(Person);

// // define property
// Object.defineProperty(Person, 'Location', { value: 'TamilNadu' })
// console.log(Person)

// // Object entries
// const object1 = {
//     a: 'San',
//     b: 42
// };

// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
// }
// //Object freeze

// Object.freeze(obj4)
// obj4.a = 5
// console.log(obj4);

// //get own property description
// const property = Object.getOwnPropertyDescriptor(Person, 'company1')
// console.log(property.writable, property.value);

// // get own property names

// console.log(Object.getOwnPropertyNames(Person));

// //get own property symbols
// const a=Symbol('a')
// const b=Symbol.for('b')
// object1[a]='Symbol1'
// object1[b]='Symbol2'
// console.log(object1);
// console.log(Object.getOwnPropertySymbols(object1));

// //prototype type

// console.log(Object.getPrototypeOf(me));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(me)));

// //has own
// console.log(Object.hasOwn(object1,'a'))

// // has own property
// console.log(object1.hasOwnProperty('a'));

// // object is
// console.log(Object.is('san',"san"));


// // is extensible
// console.log(Object.isExtensible(object1));
// Object.preventExtensions(object1);
// console.log(Object.isExtensible(object1));

// //Keys

// console.log(Object.keys(Person));

// //to string

// Person.toString=()=>{
//     console.log(this.name);
// }
// me.toString()

// //value of 

// console.log(Object.values(obj4));

// //prototype value of

// function aspire(){
//     this.name='Aspire'
// }
// aspire.prototype.valueOf=function(){
//     return this.name
// }
// const object2=new aspire()
// console.log(object2+'');