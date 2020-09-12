const express=require("express");
var bodyParser = require('body-parser')
const app=express();
app.get('/get/:a/:b',(req,res)=>{
  console.log(req.params) ;
  const {a, b} = req.params;
    let sum = 0 ;
    sum = parseInt(a) + parseInt(b);
    console.log(sum);
    res.send(sum.toString());
});
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.post('/create',(req,res)=>{
  
    console.log(typeof req.body) ;
    console.log(req.body.a);
    const {a, b} = req.body;
      let sum = 0 ;
      sum = Number(a) * Number(b);
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