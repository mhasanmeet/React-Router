import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "../index.css";

const ShirtDetails = () => {
    const params = useParams();
    const [shirt, setShirt] = useState(null)

    console.log(params)

    useEffect(() => {
        fetch(`/api/shirts/${params.id}`)
            .then(res => res.json())
            .then(data => setShirt(data.shirts))
    }, [params.id])

  return (
    <div className="shirt-details-container">
        {shirt ? (
            <div className="shirt-details">
                <img src={shirt.imageUrl} alt=""/>

                <div className="details">
                    <h3>{shirt.name}</h3>
                    <p className="price">$ {shirt.price}</p>
                    <p>{shirt.type}</p>
                    <p>{shirt.description}</p>
                    <button>Buy Now!</button>
                </div>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
  )
}

export default ShirtDetails