import { useOutletContext } from "react-router-dom"
import "../../index.css";

const PropertyPhoto = () => {
    const {propertyDetails} = useOutletContext()

  return (
    <div className="property-details-property-photo">
        <img src={propertyDetails.imageUrl} alt="" />
    </div>
  )
}

export default PropertyPhoto