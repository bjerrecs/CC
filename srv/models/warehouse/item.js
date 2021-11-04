const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
    location:String,
    name:String,
    assetid:String
});


module.exports = mongoose.model("Items",itemSchema);