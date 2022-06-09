import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

const reducer = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer
});
export default reducer;
