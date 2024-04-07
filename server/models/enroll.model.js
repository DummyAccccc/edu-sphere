// import mongoose, { Schema } from "mongoose";
const mongoose = require('mongoose')

const enrollSchema = new mongoose.Schema(

    {
        course_id: {
            type: String,
        },
        user_email: {
            type: String,
        },
        invitation: {
            type: Boolean,
        },

    },
    {
        timestamps: true
    }
)


const Enroll = mongoose.model("Enroll", enrollSchema)
module.exports = Enroll
