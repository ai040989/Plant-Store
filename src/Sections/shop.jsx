import React from "react";
import ProductCard from '../Components/ProductCard.jsx';
import'./shop.css';

function Shop(){

    return(
        <div className="Product-liste">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>
    )
   
};

export default Shop;