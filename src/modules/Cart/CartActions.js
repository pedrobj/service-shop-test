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
export const chackAndAddToCart = (id, amount) => (dispatch, getState) => {
  // Fake amount check. Deveria se criar uma endpoint para trazer se o total do inventory é válido.
  const product = getState().product.products.find(p => p.id === id) || {};
  if (product.amount > 0) {
    return dispatch(addToCart({ id, amount }));
  }
  swal('Add to cart error', 'Empty inventory.', 'error').catch(swal.noop);
  return dispatch(addToCartFail());
};
