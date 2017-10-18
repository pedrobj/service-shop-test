import swal from 'sweetalert2';

import productsMock from '../../util/mock.json';

// Export Constants
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';
export const FETCH_PRODUCTS_FULL = 'FETCH_PRODUCTS_FULL';
export const SET_FILTER = 'SET_FILTER';

// Export Actions
export const fechingProducts = () => ({ type: FETCH_PRODUCTS });
export const fechingProductsSuccess = (products) => ({ type: FETCH_PRODUCTS_SUCCESS, products });
export const fechingProductsFail = (error) => ({ type: FETCH_PRODUCTS_FAIL, error });
export const fechingProductsFull = () => ({ type: FETCH_PRODUCTS_FULL });
export const setFilter = (category) => ({ type: SET_FILTER, category });

// Fetch products
export const fetchProducts = () =>
  (dispatch, getState) => {
    dispatch(fechingProducts());

    const category = getState().product.category;

    if (productsMock.list) {
      if (productsMock.list.length) {
        const filteredList = category
          ? productsMock.list.filter(product => product.category === category)
          : productsMock.list;
        return setTimeout(() => { // Fake Loading delay
          dispatch(fechingProductsSuccess(filteredList));
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

export function changeFilter(category) {
  return (dispatch) => {
    dispatch(setFilter(category));
    dispatch(fetchProducts());
  };
}
