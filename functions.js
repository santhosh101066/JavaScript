//callback
function example() {
    console.log('hello world');
}
example()
const c = example
c()
//anonymous function
const a = () => {
    console.log('hello world !!');
}
const b = function () {
    console.log('hello world war !!');
}
const output = console.log
output("Toy")
output("--------------------------------------------------------------------")

//passing function in function
passingFunction(b)

function passingFunction(fun) {
    fun()
}



//IIFE imediately invoke function expression
(() => {
    console.log("IIFE");
})();
console.log("IIFE");
(a)()
a()
output('=========================')
var san = 10
let van = 'hi'
function ES6() {
    let van = 'hello'
    output(van)
}
ES6()
console.log(san, van);
const company = 'aspire'
const list = []
console.log(company.concat('sdf'), company);
list.push("Amar")
// list=['amar']
output(list)
let num = 0
num++
output(num, '\n------------------------------------')
//_____________________________________________

function defaultParam(a = 'Computer') {
    output(a + ' Systems')
}
defaultParam('Aspire')
defaultParam()