import { Link, Outlet } from "react-router-dom"

const LandlordLayout = () => {
  return (
    <>    
        <nav>  
            <Link to="/landlord">Dashboard</Link>        
            <Link to="/landlord/income">Income</Link>        
            <Link to="/landlord/reviews">Review</Link>                
        </nav>
        
        <Outlet/>
    </>
  )
}

export default LandlordLayout