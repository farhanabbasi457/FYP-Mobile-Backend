const mongoose = require("mongoose");
const category = mongoose.Schema({
    name:{type:String ,required:true}
})

module.exports = mongoose.model("category", category);