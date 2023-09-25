import { useEffect, useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";

const Properties = () => {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch("/api/properties")
            .then(res => res.json())
            .then(data => setProperties(data.properties))
    }, [])

    console.log(properties)

    const propertyElements = properties.map(property => (
        <div key={property.id} className="property-title">
            <Link to={`/properties/${property.id}`}>            
                <img src={property.imageUrl} className="property-img"/>
                
                <div className="property-info">
                    <h3>{property.name}</h3>
                    <p>${property.price}</p>
                    <p className={`property-type ${property.type} selected`}>{property.type}</p>
                </div>
            </Link>
        </div>
    ))

    return (
        <div className="properties">
            <h2 className="">Explore our Properties!</h2>
            <div className="property-container">
                {propertyElements}
            </div>
        </div>
    )
}

export default Properties