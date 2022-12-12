import fs from 'fs'

let buff=Uint16Array.from("santhosh🙂️".split('').map(v=>v.charCodeAt()+12))
console.log(buff.buffer);
console.log(String.fromCharCode(...buff));
console.log(buff);
fs.writeFileSync('data.dat',buff)
fs.readFile('data.dat',(er,data)=>{
    let decrypt=new Uint16Array(data.buffer);
    fs.writeFileSync('dec.dat',String.fromCharCode(...decrypt.map(d=>d-12)))
    console.log(String.fromCharCode(...decrypt.map(d=>d-12)));

})


//--------------------encrypting-------
const filename='test.html'
let file=fs.readFileSync(filename)
console.log(file);
console.log(String.fromCodePoint(...file));
fs.writeFileSync('encript'+filename,file.map(v=>v-15));

//--------------------decrypting--------
file=fs.readFileSync('encript'+filename)
console.log(file);
console.log(String.fromCodePoint(...file));
fs.writeFileSync('decrypt'+filename,file.map(v=>v+15))


