import { Route, Routes } from 'react-router-dom'
import Home from './componentsTwo/Home'
import Footer from './componentsTwo/Footer'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
