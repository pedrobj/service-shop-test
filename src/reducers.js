/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import cart from './modules/Cart/CartReducer';
import product from './modules/Product/ProductReducer';

// Combine all reducers into one root reducer
export default combineReducers({ cart, product });
