import swal from 'sweetalert2';

// Export Constants
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_CART_FAIL = 'ADD_TO_CART_FAIL';

// Export Actions
export const addToCart = ({ id, amount }) => ({ type: ADD_TO_CART, id, amount });
export const addToCartFail = () => ({ type: ADD_TO_CART_FAIL });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id });

// Action Creatos
export const chackAndAddToCart = ({ id, amount }) => (dispatch, getState) => {
  const product = { total: 2 }; // getState().products.find(p => p.id === id) || {};
  if (product.total > 0) {
    return addToCart({ id, amount });
  }
  return addToCartFail();
};
