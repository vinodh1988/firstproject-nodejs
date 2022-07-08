const books=require('../database/bookschema')

var express=require("express")
var route=express.Router()

route.get("/books",function(request,response){
    books.find({},{_id:0},function(err,data){
        if(err) 
           response.send("No DAta")
        else
           response.json(data)
    })
})


route.post("/books",function(request,response){
    books.insertMany(request.body,function(err,data){
        if(err) 
           response.send("No DAta")
        else
           response.json(data)
    })
})

route.delete("/books/:sno",function(request,response){
    books.deleteMany({bno:request.params.sno},function(err,data){
        if(err) 
           response.send("Not deleted")
        else
           response.json({status:"Deleted"})
    })
})

route.put("/books/:sno",function(request,response){
   
    books.updateMany({bno:request.params.sno},{$set:request.body},function(err,data){
        if(err) 
           response.send("Not deleted")
        else
           response.json({status:"updated"})
    })
})


module.exports=route