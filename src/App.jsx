import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import "./index.css";
import "./server";
import Layout from './components/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route element={<Layout/>}>        
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/properties' element={<Properties />}/>
          <Route path='/properties/:id' element={<PropertyDetails/>}/>
        </Route>   
      </Routes>   
    </BrowserRouter>
  )
}

export default App
