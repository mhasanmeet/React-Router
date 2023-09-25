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
import LandlordProperties from './pages/landlord/LandlordProperties';
import LandlordPropertiesDetails from './pages/landlord/LandLordPropertiesDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Layout/>}>        
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='properties' element={<Properties />}/>
          <Route path='properties/:id' element={<PropertyDetails/>}/>

          <Route path='/landlord' element={<LandlordLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='income' element={<Income/>}/>
            <Route path='reviews' element={<Reviews/>}/>
            <Route path='properties' element={<LandlordProperties/>}/>
            <Route path='properties/:id' element={<LandlordPropertiesDetails/>}/>
          </Route>
        </Route>   
      </Routes>   
    </BrowserRouter>
  )
}

export default App
