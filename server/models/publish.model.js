// import mongoose, { Schema } from "mongoose";
const mongoose = require('mongoose')

const publishSchema = new mongoose.Schema(

    {
        course: {
            type: String,
        }

    },
    {
        timestamps: true
    }
)


const Publish = mongoose.model("Publish", publishSchema)
module.exports = Publish
