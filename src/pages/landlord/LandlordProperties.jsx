import { useEffect, useState } from "react"
import "../../index.css";
import { Link } from "react-router-dom";

const LandlordProperties = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
      fetch("/api/landlord/properties")
          .then(res => res.json())
          .then(data => setProperties(data.properties))
  }, [])

  console.log(properties)

  const LandlordPropertiesEls = properties.map(property => (
    <Link to={`/landlord/properties/${property.id}`} key={property.id}>
      <div className="landlord-property-main">
        <img src={property.imageUrl} alt="" />

        <div className="property-info">
          <h3>{property.name}</h3>
          <p>$ {property.price}</p>
          <p className={`property-type ${property.type} selected`}>{property.type}</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <div className="landlord-properties">
        <h2>My Properties</h2>
        
        {
          properties.length > 0 ? 
          (
            <section className="landlord-property-container">
              {LandlordPropertiesEls}
            </section>
          ) : 
          (
            <h2>Loading...</h2>
          )
        }

    </div>
  )
}

export default LandlordProperties