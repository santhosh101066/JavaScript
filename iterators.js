let generator = {
    [Symbol.iterator]() {
        let i=0
        return {
           next () {
            i+=10
               return i===100 ? { done: true, value: i }: { done: false, value: i }
           }
        }
    }
}

for (let n of generator) {
    console.log(n)
}