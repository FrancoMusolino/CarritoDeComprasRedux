import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../actions/shoppingActions';

const CartItem = ({ data }) => {
    const dispatch = useDispatch()
    let { id, name, price, quantity } = data;

    return (
        <div style={{ borderBottom: "thin solid gray" }}>
            <h4>{name}</h4>
            <h5>
                ${price}.00 x {quantity} = ${price * quantity}.00
            </h5>
            <button onClick={() => dispatch(deleteFromCart(id))}>Eliminar Uno</button>
            <br />
            <button onClick={() => dispatch(deleteFromCart(id, true))}>Eliminar Todos</button>
            <br />
            <br />
        </div>
    );
};

export default CartItem;