const mongoose = require("mongoose");

const ComSchema = new mongoose.Schema({
    companyId:{type :Number },
    primaryText:{type :String },
    headline:{type :String },
    description:{type :String },
    CTA:{type :String },
    imageUrl:{type :String },
    com_name:{type :String },
    com_url:{type :String }
})

module.exports = mongoose.model("products", ComSchema);