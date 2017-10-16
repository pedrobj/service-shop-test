import swal from 'sweetalert2';

import productsMock from '../../util/mock.json';

// Export Constants
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';
export const FETCH_PRODUCTS_FULL = 'FETCH_PRODUCTS_FULL';

// Export Actions
export const fechingProducts = () => ({ type: FETCH_PRODUCTS });
export const fechingProductsSuccess = (products) => ({ type: FETCH_PRODUCTS_SUCCESS, products });
export const fechingProductsFail = (error) => ({ type: FETCH_PRODUCTS_FAIL, error });
export const fechingProductsFull = () => ({ type: FETCH_PRODUCTS_FULL });

// Fetch products
export const fetchProducts = () =>
  (dispatch) => {
    dispatch(fechingProducts());

    if (productsMock.list) {
      if (productsMock.list.length) {
        return setTimeout(() => { // Fake Loading delay
          dispatch(fechingProductsSuccess(productsMock.list));
        }, 1000);
      }
      return setTimeout(() => { // Fake Loading delay
        dispatch(fechingProductsFull());
      }, 1000);
    }

    const error = 'Error fetching products.';
    swal('Erro', error, 'error').catch(swal.noop);
    return dispatch(fechingProductsFail(error));
  };
