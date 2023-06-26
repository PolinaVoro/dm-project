
import { ADD_TO_CART, SET_CART_ITEMS } from '../../store/actions/types';



export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
};

export const fetchCartItems = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://skillfactory-task.detmir.team/cart');
      const data = await response.json();
      dispatch(setCartItems(data));
    } catch (error) {
      
      console.error('Failed to fetch cart items:', error);
    }
  };
};

export const setCartItems = (cartItems) => {
  return {
    type: 'SET_CART_ITEMS',
    payload: cartItems
  };
};
