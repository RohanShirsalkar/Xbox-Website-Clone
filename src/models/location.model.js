const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    // userId: String,
    firstName: String,
    lastName: String,
    addressLine: String,
    state: String,
    city: String,
    pinCode: Number,
    phone: Number
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;