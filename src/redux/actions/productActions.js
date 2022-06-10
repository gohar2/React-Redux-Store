import { actionTypes } from '../constants/actionsTypes';
import fakeStoreApi from '../../apis/storeApi';
export const fetchProducts = () => async dispatch => {
  const res = await fakeStoreApi.get('/products').catch(err => {
    console.log('Error ', err);
  });
  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: res.data });
};
export const selectedProducts = id => async dispatch => {
  const res = await fakeStoreApi.get(`/products/${id}`).catch(err => {
    console.log('Error ', err);
  });
  dispatch({ type: actionTypes.SELECTED_PRODUCT, payload: res.data });
};
export const deleteProducts = id => async dispatch => {
  const res = await fakeStoreApi.delete(`/products/${id}`).catch(err => {
    console.log('Error ', err);
  });
  dispatch({ type: actionTypes.REMOVE_SELECTED_PRODUCT, payload: res.data });
};
