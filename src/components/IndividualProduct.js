import React from 'react'

export const IndividualProduct = ({individualProduct, addToCart}) => {
    // console.log(individualProduct);
   
    // triggers add to cart
    const handleAddToCart=()=>{
        addToCart(individualProduct);
    }  

    // the card for each individual product
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.title}</div>
            <div className='product-text description'>{individualProduct.description}</div>
            <div className='product-text price'>$ {individualProduct.price}</div>
            <div className='btn btn-outline-danger ' onClick={handleAddToCart}>ADD TO CART</div>
        </div> 
    )
}
