import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import { clearCart, deleteAllFormCart, deleteOneFormCart } from '../actions/shoppingActions';

const ShoppingCart = () => {
    const state = useSelector(state => state.shopping);
    const { products, cart } = state;
    const dispatch = useDispatch();

    const delFromCart = (id, all = false) => {
        if (all) {
            dispatch(deleteAllFormCart(id));
        } else {
            dispatch(deleteOneFormCart(id));
        }
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive">
                {products.map((product) => (
                    <ProductItem key={product.id} data={product} />
                ))}
            </article>
            <h3>Carrito</h3>
            <article className="box">
                <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
                {cart.map((item, index) => (
                    <CartItem key={index} data={item} delFromCart={delFromCart} />
                ))}
            </article>
        </div>
    );
};

export default ShoppingCart;