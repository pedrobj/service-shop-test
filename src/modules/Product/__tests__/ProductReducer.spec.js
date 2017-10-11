import test from 'ava';
import { reducerTest } from 'redux-ava';

import ProductReducer from '../ProductReducer';
import { fechingProductsSuccess } from '../ProductActions';

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

const initialState = {
  loading: false,
  error: false,
  products: [],
};

test('action for ADD_SURVEY is working', reducerTest(
  ProductReducer,
  initialState,
  fechingProductsSuccess(products.list),
  {
    ...initialState,
    products: products.list,
  },
));

