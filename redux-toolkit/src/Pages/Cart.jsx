import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Store/CartSlice';

const Cart = () => {
    const productCart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id, 1)); 
    };
    const groupProducts = (products) => {
        const groupedProducts = {};
        products.forEach((product) => {
            if (groupedProducts[product.id]) {
                groupedProducts[product.id].quantity++;
            } else {
                groupedProducts[product.id] = { ...product, quantity: 1 };
            }
        });
        return Object.values(groupedProducts);
    };

    return (
        <div>
            {groupProducts(productCart).map((product, index) => (
                <div key={index}>
                    <p>Name: {product.name}</p>
                    <img src={product.image} alt="" />
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={() => handleRemoveItem(product.id)}>Remove One</button>
                    <button onClick={() => handleCart(product.id)}>Remove All</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
