import { combineReducers } from 'redux';
import {
  productReducer,
  selectedProductReducer,
  removeProductReducer
} from './productReducer';

const reducer = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
  removeProduct: removeProductReducer
});
export default reducer;
