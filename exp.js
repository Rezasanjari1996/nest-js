const express=require("express");
const app=express();
app.get('/root/:a/:b',(req,res)=>{
  console.log(req.params) ;
  const {a, b} = req.params;
    let sum = 0 ;
    sum = parseInt(a) + parseInt(b);
    console.log(sum);
    res.send(sum.toString());
  
 
});

app.listen(3000,()=>console.log('server is runnig on localhost:3000'));