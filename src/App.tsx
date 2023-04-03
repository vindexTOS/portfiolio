import { Route, Routes } from 'react-router-dom'
import Home from './componentsTwo/Home'
import Footer from './componentsTwo/Footer'
import AboutMe from './componentsTwo/AboutMe'
import Skills from './componentsTwo/Skills'
import Projects from './componentsTwo/Projects'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
