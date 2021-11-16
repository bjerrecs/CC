const mongoose = require("mongoose");
const MaintenanceWindow = new mongoose.Schema({
    type:String,
    reason:String,
    responseble:String,
    datestart:String,
    dateend:String,
    timestart:String,
    timeend:String,
    status:String
});


module.exports = mongoose.model("MaintenanceWindow",MaintenanceWindow);