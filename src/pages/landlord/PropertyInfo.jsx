import { useOutletContext } from "react-router-dom"

const PropertyInfo = () => {
    // get props from <Outlet context={{propertyDetails}}/>
    const {propertyDetails} = useOutletContext()

  return (
    <section className="property-details-property-info">
        <h4>Property Name: {propertyDetails.name}</h4>
        <h4>Property Type: {propertyDetails.type}</h4>
        <p>Property Description: {propertyDetails.description}</p>
        <p>Visibility: Public</p>
    </section>
  )
}

export default PropertyInfo