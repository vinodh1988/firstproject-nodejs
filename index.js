const fs=require("fs")
console.log("First Node JS Application-> second run")

fs.readFile("package.json","utf-8",function(err,data){
    if(err)
      console.log("unable to read file: " + err.message)
    else
      console.log(data)
})

console.log("after file reading")