import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_FULL,
} from './ProductActions';

// Initial State
const initialState = {
  loading: false,
  error: false,
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
        products: [...state.products, ...action.products],
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

    default:
      return state;
  }
};

// Export Reducer
export default ProductReducer;
