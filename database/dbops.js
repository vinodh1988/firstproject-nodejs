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

     getPerson: function(sno,callback){
      connection.query("select * from people where sno=?",[sno],callback)
     },
     deletePerson: function(sno,callback){
      connection.query("delete from people where sno=?",[sno],callback)
     },

     updatePerson: function(sno,name,city,callback){
      connection.query("update people set name=?,city =? where sno=? ",
      [name,city,sno],
      callback)
       },

   }

module.exports = operations;