import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About' // Added missing import
import Quiz from './pages/Quiz'
import Courses from './pages/Courses'
import Contact from './pages/Contact' // Fixed typo in import
import Navbar from './components/Navbra'
import Footer from './components/Footer'
import Html from './pages/Html'
import CssQuiz from './pages/Css'
import Js from './pages/JS'
import ExcelQuiz from './pages/ExcelQuiz'
import GraphicDesignQuiz from './pages/GraphicDesignQuiz'
import Enroll from './pages/Enroll'
import ResultPage from './pages/Resultpage'

const App = () => {
  return (
    <div className='mt-10'>
      <Router>
       <Navbar />
        <Routes> {/* Added Routes wrapper */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/html' element={<Html />} />
          <Route path='/css' element={<CssQuiz />} />
          <Route path='/js' element={<Js />} />
          <Route path='/excel' element={<ExcelQuiz />} />
          <Route path='/enroll' element={<Enroll />} />
          <Route path='/result' element={<ResultPage />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App