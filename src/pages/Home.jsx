import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className='home'>
      <h2>We sell Developer T-shirt</h2>
      Explore our t-shirt <Link to="/shop">Shop</Link>
    </div>
  )
}

export default Home