import { actionTypes } from '../constants/actionsTypes';
const initialState = {
  products: []
};
const initialProductState = {
  product: []
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (
  state = initialProductState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};
export const removeProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};
