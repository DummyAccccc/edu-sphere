const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const User = require('./models/users.model')
// const Course = require('./models/course.model')
// const Instructor = require('./models/instructor.model')
const app = express()

app.use(cors())
app.use(express.json());

let DB_NAME = "edusphere"
let MONGODB_URL = "mongodb+srv://adityagawali044:aditya123@cluster0.c5l20cy.mongodb.net"
mongoose.connect(`${MONGODB_URL}/${DB_NAME}`)
    .then(() => {
        app.listen(3001, () => {
            console.log("Server is running")
        })
    }).catch(err => console.log("mongodb connection failed", err))


// Define a route to handle POST requests to create a new user
app.post('/users', async (req, res) => {
    try {

        const { user, name, email, mobile, company, password } = req.body;

        const newUser = new User(user != "Administrator" ? { role: user, name: name, email: email, mobile: mobile, password: password } : { role: user, name: name, email: email, mobile: mobile, company: company, password: password });

        const savedUser = await newUser.save();
        res.json(savedUser);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
});