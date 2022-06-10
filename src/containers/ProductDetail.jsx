import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/actions/productActions';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const product = useSelector(state => state.selectedProduct.product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  useEffect(() => {
    dispatch(selectedProducts(productId));
  }, []);

  return <div>{product.title}</div>;
}
