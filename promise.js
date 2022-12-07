const divider= (a,b)=>{
return new Promise((resolve,reject)=>{
    if(b===0){
        reject('2nd Parameter must not be 0')
    }
    else{
        setTimeout(()=>resolve((a/b)),3000)        
    }
})
}
divider(1,4).then(console.log).catch(console.error)
console.log('event 1 ended here');
(async()=>{
   const a= await divider(1,6)
   console.log(a);
})()

console.log('event 2 ended here');

speeder=(a,name)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,a,name)
    })
}
const one=speeder(100,'one')
const two=speeder(200,'two')
const three=speeder(3000,'three')
Promise.all([one,two,three]).then(console.log)

Promise.any([one,two,three]).then(console.log)

