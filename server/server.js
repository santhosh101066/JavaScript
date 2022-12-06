const express=require('express')
const app=express()
app.listen((3000),()=>{
    console.log("Running on http://localhost:3000");
})

app.get('/',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{res.json({data:'hello'})},5000)
  

})