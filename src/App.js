
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Live from './components/pages/Live';
import Connect from './components/pages/Connect';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      
    <Navbar />
   
          <Routes>
          <Route path="/" element={<>
          <Home/>
          <About/>
           <Live/>
          <Connect/>
         
          </>} />
      
          <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
    </Router>

  
  
    </>
  );
}

export default App;
