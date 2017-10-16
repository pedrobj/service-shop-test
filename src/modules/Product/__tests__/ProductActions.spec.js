import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  fechingProductsSuccess,
  FETCH_PRODUCTS_SUCCESS,
  fechingProductsFail,
  FETCH_PRODUCTS_FAIL,
  fechingProductsFull,
  FETCH_PRODUCTS_FULL,
} from '../ProductActions';

const products = {
  list: [
    {
      name: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 399.99,
      amount: 4,
    },
    {
      name: 'Service 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 199.99,
      amount: 0,
    },
  ],
};

test('should return the correct type for fechingProductsSuccess', actionTest(
  fechingProductsSuccess,
  products.list,
  { type: FETCH_PRODUCTS_SUCCESS, products: products.list },
));

test('should return the correct type for fechingProductsFail', actionTest(
  fechingProductsFail,
  'This is an error',
  { type: FETCH_PRODUCTS_FAIL, error: 'This is an error' },
));

test('should return the correct type for fechingProductsFail', actionTest(
  fechingProductsFull,
  { type: FETCH_PRODUCTS_FULL },
));
