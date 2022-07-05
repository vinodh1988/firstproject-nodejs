var express=require("express");
var app=express();
var path=require("path");
var dbroute= require("./routes/dbroute");

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, "public/styles/")));
app.use(express.static(path.join(__dirname, "public/scripts/")));
app.use(express.static(path.join(__dirname, "node_modules/")))

app.use("/dbpages",dbroute)
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