import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/actions/productActions';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const product = useSelector(state => state.selectedProduct.product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const feachproducts = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => {
        console.log('Error ', err);
      });
    dispatch(selectedProducts(res.data));
  };
  useEffect(() => {
    feachproducts();
  }, []);
  console.log(product);

  return <div>{product.title}</div>;
}
