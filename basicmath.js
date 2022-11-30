const myInt = 10
const myFloat = 12.098765
console.log(typeof (myInt), typeof myFloat);

console.log('toFixed()', myFloat.toFixed(2))
const add = 1 + 2
const sub = 1 - 2
const div = 1 / 2
const modulo = 1 % 2
const exponent = 1 ** 2
console.log(add, sub, div, modulo,);

var company = 'Aspire System'
console.log(company.length);
console.log(company.split(' '));
console.log(company.trim())
console.log(company[4])
console.log(company.search('System'))
console.log(Number("123456"));
console.log(`${company.indexOf("s", 0)}
-------------------------------
${company.concat(" Siruseri")}
-------------------------------
`);
console.log(company.slice(6));
console.log(company.match("System"));

console.log(company.slice(0, 6) + " dummy " + company.slice(6));