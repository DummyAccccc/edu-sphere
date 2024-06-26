const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const User = require('./models/users.model')
const Course = require('./models/course.model')
const Instructor = require('./models/instructor.model')
const Publish = require('./models/publish.model')
const Enroll = require('./models/enroll.model')
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
        console.log(user)
        const newUser = new User(user == "Instructor" ? { role: user, name: name, email: email, mobile: mobile, password: password } : { role: user, name: name, email: email, mobile: mobile, company: company, password: password });

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

        const newCourse = new Course({ title: title, desc: desc, pre: pre, criteria: criteria, duration: duration, hours: hours, assign: "false" });

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
        console.log(selectCourse)
        const newAssign = new Instructor({ name: name, email: email, course: selectCourse });

        const savedAssign = await newAssign.save();
        res.json(savedAssign);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while Assigning the course' });
    }
});

app.post('/publish', async (req, res) => {
    try {

        const { id } = req.body;
        console.log(id)
        const newAssign = new Publish({ course: id });

        const savedAssign = await newAssign.save();
        res.json(savedAssign);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while Assigning the course' });
    }
});


app.post('/enrollCourse', async (req, res) => {
    try {

        const { id, userEmail } = req.body;

        const newAssign = new Enroll({ course_id: id, user_email: userEmail, invitation: false });

        const savedAssign = await newAssign.save();
        res.json(savedAssign);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while Assigning the course' });
    }
});


app.post('/checkcourse', async (req, res) => {
    try {

        const { selectCourse } = req.body;
        console.log(selectCourse)

        const newCheck = new assignedCourse({ c_id: selectCourse });
        const savedAssign = await newCheck.save();
        res.json(newCheck);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while Assigning the course' });
    }
});

app.get('/fetchassign', async (req, res) => {
    try {
        const assign = await Instructor.find()

        res.send(assign);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching assign instructor' });
    }
});

app.get('/fetchEnroll', async (req, res) => {
    try {
        const enroll = await Enroll.find()

        res.send(enroll);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching assign instructor' });
    }
});

app.get('/fetchPublish', async (req, res) => {
    try {
        const publishData = await Publish.find()

        res.send(publishData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching assign instructor' });
    }
});

app.get('/fetchAssignCourse', async (req, res) => {
    try {
        const courses = await Course.find({ role: 'Instructor' });

        res.send(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching courses' });
    }
});

app.get('/fetchcheck', async (req, res) => {
    try {
        const checkCourse = await assignedCourse.find();

        res.send(checkCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching courses' });
    }
});

app.get('/fetchStudent', async (req, res) => {
    try {
        // Fetch all users from the database
        const student = await User.find({ role: 'Student' });

        res.send(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching instructors' });
    }
});
