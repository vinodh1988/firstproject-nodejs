var express=require("express");
var app=express();
var path=require("path");

app.get("/",function(request,response){
    response.send("Node JS is working");
})

app.get("/greet/:name",function(request,response){
    response.send("Hello!!!"+request.params.name);
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/index.html"));
})

app.listen("3000",function(){
    console.log("server is started on port number 3000")
})