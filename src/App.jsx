import {   
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Properties, {loader as propertiesLoader} from './pages/properties/Properties';
import PropertyDetails, {loader as propertyDetailsLoader} from './pages/properties/PropertyDetails';
import "./index.css";
import Layout from './components/Layout';
import Dashboard from './pages/landlord/Dashboard';
import Income from './pages/landlord/Income';
import Reviews from './pages/landlord/Reviews';
import LandlordLayout from './components/LandlordLayout';
import LandlordProperties, {loader as landlordProperties} from './pages/landlord/LandlordProperties';
import LandlordPropertiesDetails, {loader as landlordPropertiesDetails} from './pages/landlord/LandLordPropertiesDetails';
import PropertyInfo from './pages/landlord/PropertyInfo';
import PropertyPhoto from './pages/landlord/PropertyPhoto';
import PropertyPricing from './pages/landlord/PropertyPricing';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Error from './components/Error';
import { requireAuth } from './auth';
import "./server";


// Data Api function for handle loader
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    {/* <NavLink to="/"></NavLink> */}
    <Route index element={<Home />}/>
    {/* <NavLink to="/about"></NavLink> */}
    <Route path='about' element={<About />}/>
    {/* <NavLink to="/login"></NavLink> */}
    <Route path='login' element={<Login/>}/>
    {/* <NavLink to="/properties"></NavLink> */}
    <Route 
      path='properties' 
      element={<Properties />} 
      errorElement={<Error/>} 
      loader={propertiesLoader}
    />
    {/* <NavLink to="/properties/:id"></NavLink> */}
    <Route 
      path='properties/:id' 
      element={<PropertyDetails/>}
      loader={propertyDetailsLoader}
    />

    <Route path='/landlord' element={<LandlordLayout/>}>
      {/* <NavLink to="/landlord"></NavLink> */}
      <Route 
        index 
        // Authenticated
        loader={async () => await requireAuth()}
        element={<Dashboard/>}
      />
      {/* <NavLink to="/landlord/income"></NavLink> */}
      <Route 
        path='income' 
        // Authenticated
        loader = {async () => await requireAuth()}
        element={<Income/>}
      />
      {/* <NavLink to="/landlord/reviews"></NavLink> */}
      <Route 
        path='reviews' 
        // Authenticated
        loader = {async () => await requireAuth()}
        element={<Reviews/>}
      />
      {/* <NavLink to="/landlord/properties"></NavLink> */}
      <Route 
        path='properties' 
        element={<LandlordProperties/>}
        loader = {landlordProperties}
      />
      {/* <NavLink to="/landlord/properties/:id"></NavLink> */}
      
      <Route 
        path='properties/:id' 
        element={<LandlordPropertiesDetails/>}
        loader = {landlordPropertiesDetails}
      >
        {/* <NavLink to="/landlord/properties/:id/info"></NavLink>, it is default route that's why we eliminate info route, rather use index */}
        <Route 
          index 
          // Authenticated
          loader = {async () => await requireAuth()}
          element={<PropertyInfo/>}
        />
        {/* <NavLink to="/landlord/properties/:id/photo"></NavLink> */}
        <Route 
          path='photo' 
          // Authenticated
          loader = {async () => await requireAuth()}
          element={<PropertyPhoto/>}
        />
        {/* <NavLink to="/landlord/properties/:id/pricing"></NavLink> */}
        <Route 
          // Authenticated
          element={<PropertyPricing/>}
          loader = {async () => await requireAuth()}
          path='pricing' 
        />
      </Route>
    </Route>

    {/* Not found page, 404 page, under the main Layout */}
    <Route path='*' element={<NotFound/>}/>
  </Route> 
))



function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
