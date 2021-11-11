const mongoose = require("mongoose")
const catSchema = mongoose.Schema({
cat_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("cat",catSchema)