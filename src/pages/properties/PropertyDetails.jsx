import { useEffect, useState } from "react";
import {NavLink, useParams} from "react-router-dom";
import "../../index.css";
import arrow from "../../assets/arrow-left.svg";

const PropertyDetails = () => {
    const params = useParams();
    const [property, setProperty] = useState(null)

    console.log(params)

    useEffect(() => {
        fetch(`/api/properties/${params.id}`)
            .then(res => res.json())
            .then(data => setProperty(data.properties))
    }, [params.id])

  return (
    <div className="properties-details-container">

        <NavLink to=".." relative="path" className="nav">
            <img src={arrow} alt="" />
            <p>
            Back to all Properties
            </p>
        </NavLink>

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