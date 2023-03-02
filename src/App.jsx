import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/projects/Projects'
import Faqs from './pages/Faqs'
import SignUp from './pages/SignUp'  
import ProjectDetails from './pages/projects/ProjectDetails'
import ProjectPaths from './pages/projects/ProjectPaths'
import About from './pages/About'

function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/projects' element={<Projects />} />
              <Route path='/project-details/:title' element={<ProjectDetails />} />
              <Route path='/project-paths' element={<ProjectPaths />} />

              <Route path='/faqs' element={<Faqs />} />
              <Route path='/about' element={<About />} />

              <Route path='/signup' element={<SignUp />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
