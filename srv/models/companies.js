const mongoose = require("mongoose");
const CompanySchema = new mongoose.Schema({
    fullname:String,
    shortname:String,
    device42id:String,
    freshdeskid:String,
    freshdesklink:String,
    servicedesktier:String,
    actionsicons: {
        icon:String,
        tooltop:String,
        link:String
    }
}) ;


module.exports = mongoose.model("Company",CompanySchema);