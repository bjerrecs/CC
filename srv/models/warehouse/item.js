const mongoose = require("mongoose");
const Items = new mongoose.Schema({
    name:String,
    location:String,
    assetid:String,
    addedby:String,
    signedoutby:String
});


module.exports = mongoose.model("Items",Items);