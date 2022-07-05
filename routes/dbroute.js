var dbops = require('../database/dbops')
var express=require("express")
var route=express.Router()

route.post("/people",function(request,response){
    let sno=request.body.sno;
    let name=request.body.name;
    let city=request.body.city;
    dbops.insert(sno,name,city,function(err,data){
        if(err)
           response.send("Unable to insert person");
        else
           response.send("Succesfully inserted");
    })
})

route.get("/people",function(request,response){
    dbops.getPeople(function(err,data){
        if(err)
          response.send("No Data found")
        else
          response.render("people",{people:data,programmer: "Joseph"})
    })
})

module.exports=route