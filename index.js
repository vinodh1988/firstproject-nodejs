var express=require("express");
var app=express();

app.get("/",function(request,response){
    response.send("Node JS is working");
})

app.get("/greet/:name",function(request,response){
    response.send("Hello!!!"+request.params.name);
})

app.listen("3000",function(){
    console.log("server is started on port number 3000")
})