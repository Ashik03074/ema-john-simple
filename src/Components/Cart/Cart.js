import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, prd) => total + prd.price , 0 );
    
    // let total = 0;
    // for(let i=0;i<cart.length;i++){
    //     const product = cart[i];
    //     total = product.price;
    // }
    let shipping = 12.99;
    if(total > 35){
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99
    }
    else if(total>0){
        shipping = 12.99
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(3)
    
    const formatNumber = (num) =>{
         const number = (num).toFixed(3);
         return Number(number);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product price: {formatNumber(total)}</p>
            <p><small>Shippng Cost :{shipping}</small></p>
            <p><small>Tax + Vat : {tax}</small></p>
            <p>Total price : {grandTotal}</p>
        </div>
    );
};

export default Cart;