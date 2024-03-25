
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Connect from './components/pages/Connect';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Live from './components/pages/Live';
function App() {
  return (
    <>
    <Router>
      
    <Navbar />
   
          <Routes>
          <Route path="/" element={<>
          <Home/>
          <About/>
          <Connect/>
          <Live/>
          </>} />
      
          <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
    </Router>

  
  
    </>
  );
}

export default App;
