import { NavLink, Outlet } from "react-router-dom"

const LandlordLayout = () => {
  return (
    <>    
        <nav>  
            <NavLink to="/landlord" end className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>Dashboard</NavLink>        
            <NavLink to="/landlord/income" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>Income</NavLink>        
            <NavLink to="/landlord/reviews" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>Review</NavLink>                
        </nav>

        <Outlet/>
    </>
  )
}

export default LandlordLayout