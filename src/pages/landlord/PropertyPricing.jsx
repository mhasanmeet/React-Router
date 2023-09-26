import { useOutletContext } from "react-router-dom"

const PropertyPricing = () => {
  // get props from <Outlet context={{propertyDetails}}/>
  const {propertyDetails} = useOutletContext()

  return (
    <div>
        <p>Price: {propertyDetails.price}</p>
    </div>
  )
}

export default PropertyPricing