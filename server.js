const express=require('express');
const bodyParser=require('body-parser');

 const app=express();
 app.use( bodyParser.urlencoded({extended:true}))
 app.get("/",function(req,res){
    res.send("hello james");
 })
 app.get("/",function(req,res){
    res.sendFile(__dirname + "/calculator.html")
 })

 app.post('/', function(req,res){
const number1=Number(req.body.num1);
  const number2= Number(req.body.num2);

result= number1 +number2;

res.send("The result is :" +result)


 })


 app.listen(3000,function () {
    console.log('listening to port 3000');
    
 })