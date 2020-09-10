const http=require('http');
/*function Server(req,res){
    res.write('hello world');
    
}*/
http.createServer((req,res)=>{
res.write('hello world');
res.end();
}).listen(3000,()=>console.log("runnig app"))