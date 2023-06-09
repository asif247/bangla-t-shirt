import React from 'react';
import './Tshirt.css'
const Tshirt = ({ tShirt, handleAddToCart }) => {
    const {name,picture,price}=tShirt
    return (
        <div className="single-tSHirt">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(tShirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;