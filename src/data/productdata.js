import React from "react";


const products = [
    {
      imageAddress: './img/1.jpeg',
      price: 19.99,
      productDetails: 'Product 1 details',
      name: 'Product 1',
    },
    {
      imageAddress: './img/1.jpeg',
      price: 29.99,
      productDetails: 'Product 2 details',
      name: 'Product 2',
    },
    {
      imageAddress: './img/1.jpeg',
      price: 39.99,
      productDetails: 'Product 3 details',
      name: 'Product 3',
    },
  ];

const ProductList = () => {
    return products;
}
export default ProductList;