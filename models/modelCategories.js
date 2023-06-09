const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    categoryName: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('categories', dataSchema)
