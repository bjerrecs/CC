const mongoose = require("mongoose");
const SecretsModel = new mongoose.Schema({
    item:String,
    title:String,
    username:String,
    password:String,
    note:String,
    customer:String
});


module.exports = mongoose.model("SecretsStore",SecretsModel);