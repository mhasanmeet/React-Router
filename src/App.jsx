import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import "./index.css";
import Shop from './pages/Shop';
import "./server";
import Footer from './components/Footer';
import ShirtDetails from './pages/ShirtDetails';

function App() {

  return (
    <BrowserRouter>
      <header className='header'>
        <Link to="/" className='logo'>Codegnet</Link>
        <nav className='nav'>
          <Link to="/about" className='nav-item'>About</Link>
          <Link to="/shop" className='nav-item'>Shop</Link>
        </nav>
      </header>

      <Routes>        
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/shop/:id' element={<ShirtDetails />}/>
      </Routes>   

      <footer>
        <Footer/>
      </footer> 
    </BrowserRouter>
  )
}

export default App
