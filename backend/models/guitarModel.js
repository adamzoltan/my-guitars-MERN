
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const guitarSchema= new Schema({
    brand: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    pickups: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    neck: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    owned: {
        type: Number,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Guitar', guitarSchema)