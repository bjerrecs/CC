const mongoose = require("mongoose");
const MaintenanceWindow = new mongoose.Schema({
    type:String,
    reason:String,
    internal:String,
    startdate:String,
    enddate:String,
    starttime:String,
    endtime:String,
    status:String
});


module.exports = mongoose.model("MaintenanceWindow",MaintenanceWindow);