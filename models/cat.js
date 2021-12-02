const mongoose = require("mongoose")
const catSchema = mongoose.Schema({
cat_type:  {
    type: String,
    minlength: 3
},
size:  {
    type: String,
    minlength: 5
}, 
cost: Number
})
module.exports = mongoose.model("cat",catSchema)
