import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  REMOVE_FROM_CART,
  addToCart,
  addToCartFail,
  removeFromCart,
} from '../CartActions';

const product = { id: 1234, amount: 2 };

test('should return the correct type for addToCart', actionTest(
  addToCart,
  product,
  { type: ADD_TO_CART, id: product.id, amount: product.amount },
));

test('should return the correct type for addToCartFail', actionTest(
  addToCartFail,
  { type: ADD_TO_CART_FAIL },
));

test('should return the correct type for removeFromCart', actionTest(
  removeFromCart,
  product.id,
  { type: REMOVE_FROM_CART, id: product.id },
));
