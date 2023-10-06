// import { useEffect, useState } from "react"
import "../../index.css";
import { Link, useLoaderData } from "react-router-dom";
import { getLandlordProperties } from "../../api";

// Get landlord properties and return promise
export function loader(){
  return getLandlordProperties();
}

const LandlordProperties = () => {
  const properties = useLoaderData();
  console.log(properties)


  const LandlordPropertiesEls = properties.map(property => (
    // <Link to={`/landlord/properties/${property.id}`} key={property.id}>
    <Link to={property.id} key={property.id}>
      <div className="landlord-property-main">
        <img src={property.imageUrl} alt="" />

        <div className="property-info">
          <h3>{property.name}</h3>
          <p>$ {property.price}</p>
          <p>{property.type}</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <div className="landlord-properties">
        <h2>My Properties</h2>
        
        <section className="landlord-property-container">
          {LandlordPropertiesEls}
        </section>
    </div>
  )
}

export default LandlordProperties