import { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";


const Shop = () => {
    const [shirts, setShirts] = useState([])

    useEffect(() => {
        fetch("/api/shirts")
            .then(res => res.json())
            .then(data => setShirts(data.shirts))
    }, [])

    const shirtElements = shirts.map(shirt => (
        <div key={shirt.id} className="shirt-title">
            <Link to={shirt.id}>            
                <img src={shirt.imageUrl} className="shirt-img"/>
                <div className="shirt-info">
                    <h3>{shirt.name}</h3>
                    <p>${shirt.price}</p>
                </div>
                <p className={`shirt-type ${shirt.type} selected`}>{shirt.type}</p>
            </Link>
        </div>
    ))

    return (
        <div className="shop">
            <h2>Explore our Amazing Developer T-shirt!</h2>
            <div className="shirt-container">
                {shirtElements}
            </div>
        </div>
    )
}

export default Shop