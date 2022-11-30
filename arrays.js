const list = ['one', 'two', 3, 4, 5.0, "six", { Name: 'santhosh', place: 'siruseri' }]
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