var mongoose=require('mongoose');

var books=mongoose.model('books',new mongoose.Schema(
    {
      bno: Number,
      name: String,
      author: String,
      price: String,
      population: Number
    },
    { versionKey: false }
),'books');

module.exports=books;