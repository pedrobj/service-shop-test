import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART_FAIL,
} from './CartActions';

// Initial State
const initialState = {
  loading: false,
  error: false,
  products: {},
};

const CartReducer = (state = initialState, action) => {
  const products = { ...state.products };

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: {
          ...state.products,
          [action.id]: (state.products[action.id] || 0) + (action.amount || 1),
        },
      };

    case ADD_TO_CART_FAIL:
      return {
        ...state,
      };

    case REMOVE_FROM_CART:
      delete products[action.id];
      return {
        ...state,
        products,
      };

    default:
      return state;
  }
};

// Export Reducer
export default CartReducer;
