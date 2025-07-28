const express = require('express')
const app = express()

app.get("/",function(req,res){
    res.send("Hello world!")
    
})
const poort = 3000
app.listen(poort,(req,res)=>{
    console.log(`server connected.... at port ${poort}`);
    
})