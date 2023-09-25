import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Get properties for your future</h2>
      
      <div className="hero">
        <img src="https://source.unsplash.com/Bkp3gLygyeA" alt="" />
        <h3>Explore our Properties <Link to="/properties" className="properties-link">Properties</Link></h3>
      </div>
    </div>
  )
}

export default Home