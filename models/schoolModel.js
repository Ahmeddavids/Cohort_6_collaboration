const mongoose = require('mongoose')

const schoolSchema = new mongoose.Schema({
    schoolName:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true,
        unique: true
    },
    principal:{
        type: String,
        required: true,
        unique: true
    },
    moto:{
        type: String,
        required: true,
        unique: true
    },
    studentIds:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "students"
    }]
},{ timestamps: true})

const schoolModel = mongoose.model('schools', schoolSchema)

module.exports = schoolModel