let generator = {

    i: 0,

    next() {
        this.i += 10
        return this.i === 100 ? { done: true, value: this.i } : { done: false, value: this.i }
    }

}


let iterator = generator.next()
while (!iterator.done) {
    console.log(iterator);
   iterator= generator.next()
}

let generator2={
    [Symbol.iterator](){
        let i=0
     return{  next(){
            i += 10
            return i === 100 ? { done: true, value: i } : { done: false, value: i }
        }
    }}
}

for (let n of generator2) {
    console.log(n)
}