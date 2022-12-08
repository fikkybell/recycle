const mongoose = require("mongoose");

//creating users schema

const DataSchema = new mongoose.Schema({
    userId:{type:String, required:true},
    amount:{type:Number, required:true},
    address:{type:Object, required:true},
   

},
    {timestamps:true}
)

module.exports = mongoose.model("Data", DataSchema)