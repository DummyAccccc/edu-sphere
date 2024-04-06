import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Signin from './Components/Signin'
import Dashboard from './Components/Dashboard'
import Courses from './Components/Courses'
import NewCourse from './Components/NewCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/courses' element={<Courses />}></Route>
        <Route path='/dashboard/newcourse' element={<NewCourse />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
