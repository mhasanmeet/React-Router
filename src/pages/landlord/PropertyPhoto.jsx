import { useOutletContext } from "react-router-dom"
import "../../index.css";

const PropertyPhoto = () => {
  // get props from <Outlet context={{propertyDetails}}/>
  const {propertyDetails} = useOutletContext()

  return (
    <div className="property-details-property-photo">
        <img src={propertyDetails.imageUrl} alt="" />
    </div>
  )
}

export default PropertyPhoto