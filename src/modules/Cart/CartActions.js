import { browserHistory } from 'react-router';
import swal from 'sweetalert2';

// Export Constants
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_CART_FAIL = 'ADD_TO_CART_FAIL';
export const UPDATE_CART_AMOUNT = 'UPDATE_CART_AMOUNT';

// Export Actions
export const addToCart = ({ id, amount }) => ({ type: ADD_TO_CART, id, amount });
export const addToCartFail = () => ({ type: ADD_TO_CART_FAIL });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id });
export const setCartAmount = (id, amount) => ({ type: UPDATE_CART_AMOUNT, id, amount });

// Action Creatos
export const chackAndAddToCart = (id, amount) => (dispatch, getState) => {
  // Fake amount check. Deveria se criar uma endpoint para trazer se o total do inventory é válido.
  const product = getState().product.products.find(p => p.id === id) || {};
  if (product.amount > 0) {
    dispatch(addToCart({ id, amount }));
    return browserHistory.push('/cart');
  }
  swal('Add to cart error', 'Empty inventory.', 'error').catch(swal.noop);
  return dispatch(addToCartFail());
};

export const updateCartAmount = (id, amount) => (dispatch, getState) => {
  const product = getState().product.products.find(p => p.id === id) || {};

  if (parseInt(amount) > 0 && parseInt(amount) <= product.amount) {
    return dispatch(setCartAmount(id, parseInt(amount)));
  }
  swal('Error', 'Not enough products in inventory.', 'error').catch(swal.noop);
  return dispatch(addToCartFail());
};
