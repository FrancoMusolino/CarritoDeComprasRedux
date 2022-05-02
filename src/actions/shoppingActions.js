import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";


export const addToCart = id => ({ type: ADD_TO_CART, payload: id });

export const deleteAllFormCart = id => ({ type: REMOVE_ALL_FROM_CART, payload: id });

export const deleteOneFormCart = id => ({ type: REMOVE_ONE_FROM_CART, payload: id });

export const clearCart = () => ({ type: CLEAR_CART });