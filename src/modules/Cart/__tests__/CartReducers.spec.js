import test from 'ava';
import { reducerTest } from 'redux-ava';

import CartReducer from '../CartReducer';
import { addToCart, removeFromCart } from '../CartActions';

const product = { id: 1234, amount: 2 };
const productWithoutAmount = { id: 1234 };

test('action for ADD_TO_CART is working (with amount)', reducerTest(
  CartReducer,
  { products: {} },
  addToCart(product),
  {
    products: {
      [product.id]: 2,
    },
  },
));

test('action for ADD_TO_CART is working (without amount)', reducerTest(
  CartReducer,
  { products: {} },
  addToCart(productWithoutAmount),
  {
    products: {
      [productWithoutAmount.id]: 1,
    },
  },
));

test('action for REMOVE_FROM_CART is working', reducerTest(
  CartReducer,
  { products: { 1234: 2 } },
  removeFromCart(product.id),
  {
    products: {},
  },
));
