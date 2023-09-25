import { NavLink, Outlet } from "react-router-dom"
import "../index.css";

const LandlordLayout = () => {
  return (
    <>  
        <div className="landlord-properties-menu"> 
            {/* <NavLink to="/landlord"></NavLink> */}
            <NavLink to="." end className={ ({isActive}) => isActive ? "landlord-nav-link-active" : "landlord-nav-link" }>Dashboard</NavLink>
            {/* <NavLink to="/landlord/income"></NavLink> */}        
            <NavLink to="income" className={({isActive}) => isActive ? "landlord-nav-link-active" : "landlord-nav-link"}>Income</NavLink> 
            {/* <NavLink to="/landlord/properties"></NavLink> */}        
            <NavLink to="properties" className={({isActive}) => isActive ? "landlord-nav-link-active" : "landlord-nav-link"}>Properties</NavLink>     
            {/* <NavLink to="/landlord/reviews"></NavLink> */}            
            <NavLink to="reviews" className={({isActive}) => isActive ? "landlord-nav-link-active" : "landlord-nav-link"}>Review</NavLink>                
        </div>

        <Outlet/>
    </>
  )
}

export default LandlordLayout