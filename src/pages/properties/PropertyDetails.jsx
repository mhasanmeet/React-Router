import { useEffect, useState } from "react";
import {NavLink, useLocation, useParams} from "react-router-dom";
import "../../index.css";
import arrow from "../../assets/arrow-left.svg";

const PropertyDetails = () => {
    const params = useParams();
    console.log(params)

    const location = useLocation();
    console.log(location);
    
    const [property, setProperty] = useState(null)

    // get data from api server by params id, and put data into setProperty state
    useEffect(() => {
        fetch(`/api/properties/${params.id}`)
            .then(res => res.json())
            .then(data => setProperty(data.properties))
    }, [params.id])

    /*
    condition for if there is a filter state (this state come from browser) from "property" 
    page then keep it or go back blank if there is no state.
    */ 
    const search = location.state?.search || "";

    // If there a filter state have, then "back to that properties" or "all properties"
    const propertyType = location?.state.type || "all"

  return (
    <div className="properties-details-container">

        {/* Nav for Back to properties page */}
        <NavLink to={`..${search}`} relative="path" className="nav">
            <img src={arrow} alt="" />
            <p>
            Back to {propertyType} properties
            </p>
        </NavLink>

        {/* if property available then get property data otherwise show loading */}
        {property ? (
            <div className="properties-details">
                <img src={property.imageUrl} alt=""/>

                <div className="details">
                    <h3>{property.name}</h3>
                    <p className="price">$ {property.price}</p>
                    <p>{property.type}</p>
                    <p>{property.description}</p>
                    <button>Buy Now!</button>
                </div>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
  )
}

export default PropertyDetails