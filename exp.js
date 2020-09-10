const express=require("express");
const app=express();
app.get('/get/:a/:b',(req,res)=>{
  console.log(req.params) ;
  const {a, b} = req.params;
    let sum = 0 ;
    sum = parseInt(a) + parseInt(b);
    console.log(sum);
    res.send(sum.toString());
});

app.post('/post/:a/:b',(req,res)=>{
    console.log(req.params) ;
    const {a, b} = req.params;
      let sum = 0 ;
      sum = parseInt(a) * parseInt(b);
      console.log(sum);
      res.send(sum.toString());
  });

  app.put('/put/:a/:b',(req,res)=>{
    console.log(req.params) ;
    const {a, b} = req.params;
      let sum = 0 ;
      sum = parseInt(a) / parseInt(b);
      console.log(sum);
      res.send(sum.toString());
  });

  app.delete('/delete/:a/:b',(req,res)=>{
    console.log(req.params) ;
    const {a, b} = req.params;
      let sum = 0 ;
      sum = parseInt(a) - parseInt(b);
      console.log(sum);
      res.send(sum.toString());
  });
  
  

app.listen(3000,()=>console.log('server is runnig on localhost:3000'));