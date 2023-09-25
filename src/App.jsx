import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import "./index.css";
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Footer from './components/Footer';
import "./server";

function App() {

  return (
    <BrowserRouter>
      <header className='header'>
        <Link to="/" className='logo'>Urban Properties</Link>
        <nav className='nav'>
          <Link to="/about" className='nav-item'>About</Link>
          <Link to="/properties" className='nav-item'>Properties</Link>
        </nav>
      </header>

      <Routes>        
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/properties' element={<Properties />}/>
        <Route path='/properties/:id' element={<PropertyDetails/>}/>
      </Routes>   

      <footer>
        <Footer/>
      </footer> 
    </BrowserRouter>
  )
}

export default App
