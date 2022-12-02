var list = ['one', 'two', 3, 4, 5.0, "six", { Name: 'santhosh', place: 'siruseri' }]
console.log(list.length);
console.log(list);
list.push(['Pushed', 'array'])
console.log(list);
console.log(list.pop());
console.log('----------------------------------------');
console.log(list.filter((li) => {
    console.log(li);
    if (li !== 3) {
        return li
    }

}));

console.log('-----------------------------------------');

console.log(list.map((li, i) => {
    console.log(li, i);
    return li
}));
console.log(list);
list.splice(4)
console.log(list);
//-----------------------------------------------------------------
console.log(list.at(1));
list = list.concat(['new', 'new2'])
console.log(list);
console.log(list.copyWithin(3, 4)); 
const entries = list.entries()
console.log(entries.next().value);
console.log(entries.next().value);
console.log(list.every((li) => {
    console.log(li, 1);
    return true
}));
console.log(list.fill("Hiii", 2));
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(3));
list.forEach(li => console.log(li))
console.log(Array.from("Aspire"));
console.log(list.includes('Hiii'));
console.log(list.indexOf('Hiii'));
console.log(Array.isArray(list));
console.log(list.join(' '));
const iterator = list.keys() // same as for value
for (const key of iterator) {
    console.log(key);
}
console.log(list.lastIndexOf('Hiii'), 'last Index');
console.log(Array.of(1, 2, 3, 4, 5, 6));
console.log(list.reverse());
console.log(list.shift());
console.log(list.toLocaleString());
console.log(list.toString());
list.unshift("New", "Welcome")
console.log(list);
console.log(list.forEach((g)=>{console.log(g) ; return g} ))
console.log(...list);
console.log(list[0],list[1],list[2],list[3],list[4],list[5]);
console.log(list);
