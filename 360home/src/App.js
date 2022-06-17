import NavBar from './Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Quote from './pages/Quotes/Quotes'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
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
