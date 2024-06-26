const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(

    {
        role: {
            type: String,
            required: true,
            index: true
        },
        name: {
            type: String,
            required: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        mobile: {
            type: String,
            required: true,
            lowercase: true
        },
        company: {
            type: String
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


const User = mongoose.model("User", userSchema)
module.exports = User
