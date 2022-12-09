import fs from 'fs'
// //Byte based dataarray

// class Students{
    
//     constructor(buffer=new ArrayBuffer(50)){
//         this.buffer=buffer
      
//     }
//     set buffer(b){
//         this.buffer=b
//         this.id_buf=new Uint8Array(this.buffer,1,2)
//         this.name_buf=new Uint16Array(this.buffer,0,1)
//     }
//     set id(id){
//         this.id_buf[0]=id
//     }
//     get id(){
//         return this.id_buf[0]
//     }
//     set name(n){
//         this.id_buf[0]=n
//     }
//     get name(){
//         return this.id_buf[0]
//     }
// }

// const student1=new Students()
// student1.id='A'
// student1.id='Aspire'
// student1.name='San'
// console.log(student1.id);
// console.log(student1.name);
// console.log(student1);

// let buffer = new ArrayBuffer(40)
// let txtencoder=new TextEncoder()
// let value = new Uint16Array(buffer)
// // value.forEach(a) txtencoder.encode('Aspire@123ADDADADAD')

// txtencoder.encode('Aspire@123Like long information 🙂️').forEach((data,i)=>{
//     value[i]=data-6
//     console.log(String.fromCodePoint(data));
// })
// console.log(value);
// value.forEach(a=>{
//     console.log(String.fromCharCode(a))
// })
// fs.writeFileSync('data.dat',value,console.log)
// let decrypt=''
// fs.readFileSync('data.dat',(err,data)=>{

//     data.forEach(a=>{
//         decrypt=decrypt+String.fromCodePoint(a+6)
//         console.log(String.fromCharCode(a-6>=0?a-6:0));
//     })
//     console.log(decrypt);
//     fs.writeFile('dec.dat',decrypt,console.log)
// })

// console.log(buffer[2]="😀".codePointAt(0).toString(16));
// console.log(buffer[2]);

let info='Santhosh😀'

let buffer = new ArrayBuffer(30)
let texter=Int8Array.from(info.split('').map(v=>v.codePointAt(0)))
console.log(buffer);
let i=0
texter.forEach(v=>{console.log(String.fromCodePoint(v));})


