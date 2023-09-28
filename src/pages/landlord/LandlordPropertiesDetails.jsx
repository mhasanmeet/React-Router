import { useEffect, useState } from "react"
import { NavLink, Outlet, useParams } from "react-router-dom"
import arrow from "../../assets/arrow-left.svg";
import "../../index.css";

const LandlordPropertiesDetails = () => {
  const params =  useParams();
  const [propertyDetails, setPropertyDetails] = useState(null)

  useEffect(() =>{
    fetch(`/api/landlord/properties/${params.id}`)
      .then(res => res.json())
      .then(data => setPropertyDetails(data.properties))
  }, [params.id])

  if(!propertyDetails){
    return <h2 className="property-details-loading">Loading...</h2>
  }

  return (
    <div className="landlord-property-details">
      {/* <NavLink to='..' relative="path" className="nav"> */}
      <NavLink to="/landlord/properties" className="nav">
        <img src={arrow} alt="" />
        <p>
          Back to all Properties
        </p>
      </NavLink>

      <div className="property">
        <img src={propertyDetails.imageUrl} alt="" />
        <div className="property-info">
          <h3>{propertyDetails.type}</h3>
          <h2>{propertyDetails.name}</h2>
          <p>${propertyDetails.price}</p>
        </div>
      </div>

      <nav className="property-info-nav">
        {/* <NavLink to="/landlord/properties/1/info"></NavLink>, it is default route that's why we eliminate info route */}
        <NavLink to='.' end className={ ({isActive}) => isActive ? "property-info-nav-active" : "property-info-nav-link" }>Details</NavLink>
        {/* <NavLink to="/landlord/properties/:id/photo"></NavLink> */}
        <NavLink to='photo' className={ ({isActive}) => isActive ? "property-info-nav-active" : "property-info-nav-link" }>Photo</NavLink>
        {/* <NavLink to="/landlord/properties/:id/pricing"></NavLink> */}
        <NavLink to='pricing' className={ ({isActive}) => isActive ? "property-info-nav-active" : "property-info-nav-link" }>Pricing</NavLink>
      </nav>

      {/* 1. <Outlet/> - Get landlord-property-details route wrapper routes (property-info, property-photo, property-price) in here from app.jsx routes */}
      {/* 2. here we also use context api, which is a feature of react-router-6, here server api data from [propertyDetails] state send to 
        landlord-property-details child routes to property-info, property-photo, property-price
      */}
      <Outlet context={{propertyDetails}}/>
    </div>
  )
}

export default LandlordPropertiesDetails