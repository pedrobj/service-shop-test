import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_FULL,
  SET_FILTER,
} from './ProductActions';

// Initial State
const initialState = {
  loading: false,
  error: false,
  category: '',
  products: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: [...action.products],
      };

    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case FETCH_PRODUCTS_FULL:
      return {
        ...state,
        error: false,
        loading: false,
        loaded: true,
      };

    case SET_FILTER:
      return {
        ...state,
        category: action.category,
      };

    default:
      return state;
  }
};

// Export selectors
export const getTotalProducts = products =>
  Object.keys(products).reduce((a, b) => (products[a] || a) + products[b], 0);

// Export Reducer
export default ProductReducer;
