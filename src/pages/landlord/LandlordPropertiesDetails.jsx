import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
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
      {/* <NavLink to="/landlord/properties"></NavLink> */}
      <NavLink to='..' relative="path" className="nav">
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
    </div>
  )
}

export default LandlordPropertiesDetails