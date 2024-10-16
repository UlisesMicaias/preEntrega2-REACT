import React from 'react';
import cart from '../assets/cart.svg';

function CartWidget() {
    const cartCount = 1
return (
    <>
        <span> { cartCount }</span>
        <img src={cart} style={{width:30}}/>
    </>
    ) 
}


export default CartWidget
