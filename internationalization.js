var usnum=new Intl.NumberFormat('en-US')// Number formatting
var innum=new Intl.NumberFormat('en-IN')
console.log(usnum.format(1234567.89));
console.log(innum.format(1234567.89));

var usnum=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}) // currency formatting
var innum=new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'})
console.log(usnum.format(1234567.89));
console.log(innum.format(1234567.89));

var usdate=new Intl.DateTimeFormat('en-US',{timeStyle:"medium",dateStyle:"short"})// time formatting
var indate=new Intl.DateTimeFormat('en-IN')
var gerdate=new Intl.DateTimeFormat('de-DE')
console.log(usdate.format(new Date()));
console.log(indate.format(new Date()));
console.log(gerdate.format(new Date()));
console.log('\n');

console.log('S'.repeat(4));//String repeat
console.log(Number.isSafeInteger(9007199254740991)); //if value is equal or greater than 2^53 it unsafe
console.log(Math.pow(2,53));
console.log(Number.isNaN(NaN),Number.isNaN(32),Number.isNaN(Infinity),Number.isNaN(-Infinity));
console.log(Math.trunc(14.997));
console.log(Math.sign(-2345));
