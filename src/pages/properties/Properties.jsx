import { useEffect, useState } from "react";
import "../../index.css";
import { Link, useSearchParams } from "react-router-dom";

const Properties = () => {
    // get search parameter api and use as state
    const [searchParams, setSearchParams] = useSearchParams()
    const [properties, setProperties] = useState([])


    // this will give use URL type search ability like - /properties?type=anything - by useSearchParam api
    const typeFilter = searchParams.get('type')
    // console.log(typeFilter)


    // useEffect hook for get properties from api
    useEffect(() => {
        fetch("/api/properties")
            .then(res => res.json())
            .then(data => setProperties(data.properties))
    }, [])
    // console.log(properties)


    /* 
    Hole story: Here We apply conditional search by "filter" method. When we get data by "fetch" and put to 
    useEffect state to "properties". Then we use "react-router" "useParamSearch" api to get "type" attribute
    from remote api data. 

    Then in here typeFilter means, if we "search" like "/property?type=home" in our browser then 
    our search convert into lowercase and and if search string and type string match then show the data as in "displayPropertyType"

    Then we take displayPropertyType and get our preferred things like {property.name}
    */
    let displayPropertyType = typeFilter 
        ? properties.filter(property => property.type.toLowerCase() === typeFilter) 
        : properties;
    // console.log(displayPropertyType)


    // Mapping properties after useEffect hook
    const propertyElements = displayPropertyType.map(property => (
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
            
            <div className="property-filters">
                {/* Most simple and straightforward way, for clear filter we use relative path */}
                {/* <Link to="?type=home" className="filter-item">Home</Link>
                <Link to="?type=apartment" className="filter-item">Apartment</Link>
                <Link to="." className="filter-item-clear">Clear Filter</Link> */
                }

                {/* By setSearchParams state string initialization, for clear filter we use empty string */}
                {/* <button onClick={() => setSearchParams('type=home')}>Home</button>
                <button onClick={() => setSearchParams('type=apartment')}>Apartment</button>
                <button onClick={() => setSearchParams('')}>Clear Filters</button> 
                */}

                {/* By setSearchParams state Object initialization, like key and values. for clear filter we use empty Object */}
                <button onClick={() => setSearchParams({type: "home"})} className="filter-item">Home</button>
                <button onClick={() => setSearchParams({type: "apartment"})} className="filter-item">Apartment</button>
                <button onClick={() => setSearchParams({})} className="filter-item-clear">Clear Filters</button> 
               
            </div>

            <div className="property-container">
                {propertyElements}
            </div>
        </div>
    )
}

export default Properties