import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/properties/Properties';
import PropertyDetails from './pages/properties/PropertyDetails';
import "./index.css";
import "./server";
import Layout from './components/Layout';
import Dashboard from './pages/landlord/Dashboard';
import Income from './pages/landlord/Income';
import Reviews from './pages/landlord/Reviews';
import LandlordLayout from './components/LandlordLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route element={<Layout/>}>        
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/properties' element={<Properties />}/>
          <Route path='/properties/:id' element={<PropertyDetails/>}/>

          <Route path='/landlord' element={<LandlordLayout/>}>
            <Route path='/landlord' element={<Dashboard/>}/>
            <Route path='/landlord/income' element={<Income/>}/>
            <Route path='/landlord/reviews' element={<Reviews/>}/>
          </Route>
        </Route>   
      </Routes>   
    </BrowserRouter>
  )
}

export default App
