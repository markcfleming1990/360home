import NavBar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Quote from './pages/Quotes'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import {Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <NavBar />
      <div className="container">
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/quote" element={<Quote />} />
     <Route path="/projects" element={<Projects />} />
     <Route path="/contact" element={<Contact />} />
     </Routes>
      </div> 
    </>
  );
}

export default App;
