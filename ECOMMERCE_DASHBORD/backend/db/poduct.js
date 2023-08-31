const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    catagory: String,
    userID: String,
    company: String



});

const productModle = mongoose.model("products", productSchema);

module.exports = productModle;