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
          {/* <NavLink to="/"></NavLink> */}
          <Route index element={<Home />}/>
          {/* <NavLink to="/about"></NavLink> */}
          <Route path='about' element={<About />}/>
          {/* <NavLink to="/properties"></NavLink> */}
          <Route path='properties' element={<Properties />}/>
          {/* <NavLink to="/properties/:id"></NavLink> */}
          <Route path='properties/:id' element={<PropertyDetails/>}/>

          <Route path='/landlord' element={<LandlordLayout/>}>
            {/* <NavLink to="/landlord"></NavLink> */}
            <Route index element={<Dashboard/>}/>
            {/* <NavLink to="/landlord/income"></NavLink> */}
            <Route path='income' element={<Income/>}/>
            {/* <NavLink to="/landlord/reviews"></NavLink> */}
            <Route path='reviews' element={<Reviews/>}/>
            {/* <NavLink to="/landlord/properties"></NavLink> */}
            <Route path='properties' element={<LandlordProperties/>}/>
            {/* <NavLink to="/landlord/properties/:id"></NavLink> */}
            <Route path='properties/:id' element={<LandlordPropertiesDetails/>}/>
          </Route>
        </Route>   
      </Routes>   
    </BrowserRouter>
  )
}

export default App
