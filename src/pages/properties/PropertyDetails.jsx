// import { useEffect, useState } from "react";
import {NavLink, useLoaderData, useLocation} from "react-router-dom";
import "../../index.css";
import arrow from "../../assets/arrow-left.svg";
import { getProperties } from "../../api"; 

// loader promise function
export function loader({params}){
    return getProperties(params.id)
}

const PropertyDetails = () => {
    // get properties by loader
    const property = useLoaderData()

    const location = useLocation();
    // console.log(location);


    /*
    condition for if there is a filter state (this state come from browser) from "property" 
    page then keep it or go back blank if there is no state.
    */ 
    const search = location.state?.search || "";

    // If there a filter state have, then "back to that properties" or "all properties"
    const propertyType = location.state?.type || "all"

  return (
    <div className="properties-details-container">

        {/* Nav for Back to properties page */}
        <NavLink to={`..${search}`} relative="path" className="nav">
            <img src={arrow} alt="" />
            <p>
            Back to {propertyType} properties
            </p>
        </NavLink>
        
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
        
    </div>
  )
}

export default PropertyDetails