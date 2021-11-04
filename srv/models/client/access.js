const mongoose = require("mongoose");
const AccessSchema = new mongoose.Schema({
    clientid:String,
    name:String,
    link:String,
    description:String
}) ;


module.exports = mongoose.model("Access",AccessSchema);