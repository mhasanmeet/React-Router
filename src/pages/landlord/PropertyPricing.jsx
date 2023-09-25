import { useOutletContext } from "react-router-dom"

const PropertyPricing = () => {
    const {propertyDetails} = useOutletContext()

  return (
    <div>
        <p>Price: {propertyDetails.price}</p>
    </div>
  )
}

export default PropertyPricing