import React from "react";
import Productcard from "../Component/productcard";
import productdata from "../data/productdata";


const products = productdata();

function productmapping() {

    
    return products.map((product, index) => (
      <Productcard
        key={index}
        image={product.imageAddress}
        price={product.price}
        details={product.productDetails}
        name={product.name}
      />
    ));
  }

export default function Products(params) {

  const producttiles = {
    display:'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    

  }
   
   return(
   <>
   <div style={producttiles}>{productmapping()}</div>
   
</>
);
}