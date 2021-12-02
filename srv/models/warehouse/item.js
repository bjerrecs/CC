const mongoose = require("mongoose");
const Items = new mongoose.Schema({
    name:String,
    shortname:String,
    fullname:String,
    vendor:String,
    model:String,
    amount:String,
    restockamount:String,
    buyprice:String,
    sellprice:String,
    location:String,
    assetid:String,
    addeddate:String,
    addedby:String,
    signedoutdate:String,
    signedoutby:String
});


module.exports = mongoose.model("Items",Items);