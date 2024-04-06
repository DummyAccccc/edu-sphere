const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const User = require('./models/users.model')
const Course = require('./models/course.model')
const Instructor = require('./models/instructor.model')
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

app.get('/fetchUsers', async (req, res) => {
    try {
        const users = await User.find();

        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
});

app.post('/newcourse', async (req, res) => {
    try {

        const { title, desc, pre, criteria, duration, hours } = req.body;

        const newCourse = new Course({ title: title, desc: desc, pre: pre, criteria: criteria, duration: duration, hours: hours });

        const savedCourse = await newCourse.save();
        res.json(savedCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
});

app.get('/fetchCourse', async (req, res) => {
    try {
        const courses = await Course.find();

        res.send(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching courses' });
    }
});

app.get('/fetchinstructor', async (req, res) => {
    try {
        // Fetch all users from the database
        const instructors = await User.find({ role: 'Instructor' });

        res.send(instructors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching instructors' });
    }
});

app.post('/assigncourse', async (req, res) => {
    try {

        const { name, email, selectCourse } = req.body;

        const newAssign = new Instructor({ name: name, email: email, course: selectCourse });

        const savedAssign = await newAssign.save();
        res.json(savedAssign);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while Assigning the course' });
    }
});
