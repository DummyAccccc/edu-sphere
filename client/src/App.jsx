import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Signin from './Components/Signin'
import Dashboard from './Components/Dashboard'
import Courses from './Components/Courses'
import NewCourse from './Components/NewCourse'
import Instructor from './Components/Instructor'
import AssignCourse from './Components/AssignCourse'
import EnrollCourse from './Components/EnrollCourse'
import Student from './Components/Student'
import UserGithub from './Components/UserGithub'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/courses' element={<Courses />}></Route>
        <Route path='/dashboard/instructor' element={<Instructor />}></Route>
        <Route path='/dashboard/newcourse' element={<NewCourse />}></Route>
        <Route path='/dashboard/student' element={<Student />}></Route>
        <Route path='/dashboard/assigncourse' element={<AssignCourse />}></Route>
        <Route path='/dashboard/enroll' element={<EnrollCourse />}></Route>
        <Route path='/dashboard/github' element={<UserGithub />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
