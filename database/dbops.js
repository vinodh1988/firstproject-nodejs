const connection=require("./connection")

const operations ={
    insert: function(sno,name,city,callback){
        connection.query("insert into people values(?,?,?)",
        [sno,name,city],
        callback)
         },

     getPeople: function(callback){
       connection.query("select * from people",callback)
     },
   }

module.exports = operations;