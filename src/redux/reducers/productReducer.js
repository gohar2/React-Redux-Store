import { actionTypes } from '../constants/actionsTypes';
const initialState = {
  products: []
};
const initialProductState = {
  product: []
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
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
      return { ...state, payload };

    default:
      return state;
  }
};
