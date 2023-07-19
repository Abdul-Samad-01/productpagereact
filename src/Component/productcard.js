import React from "react";
import  "../scss/style.scss"


export default function productcard({ index,image, price, details, name }) {

    

      
    
      const imageStyle = {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '1rem',
      };
    
      const nameStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      };
    
      const descriptionStyle = {
        marginBottom: '1rem',
      };
    
      const priceStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        alignText:'center'

      };
    
      const buttonStyle = {
        backgroundColor: '#347474',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        
      };
      console.log(name);
    
      return (
        <div className="productCardStyle">
          <img src={image} alt={name} style={imageStyle} />
          
          
            <h3 style={nameStyle}>{name}</h3>
            <p style={descriptionStyle}>{details}</p>
            <p style={priceStyle}>${price}</p>
            <button  style={buttonStyle}>Know more</button>
        </div>
      );
}