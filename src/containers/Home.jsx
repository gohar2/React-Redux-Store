import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Home() {
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();
  const feachproducts = async () => {
    const res = await axios
      .get('https://fakestoreapi.com/products')
      .catch(err => {
        console.log('Error ', err);
      });
    dispatch(setProducts(res.data));
  };
  useEffect(() => {
    feachproducts();
  }, []);

  return (
    <div>
      <>
        <Container>
          <Row>
            {products.map((tab, index) => {
              return (
                <Col lg={4}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img className='image' variant='top' src={tab.image} />
                    <Card.Body>
                      <Card.Title>{tab.title}</Card.Title>
                      {/* <Card.Text>{tab.description}</Card.Text> */}
                      <Link to={`/product/${tab.id}`}>
                        <Button variant='primary'>Go somewhere</Button>
                      </Link>
                      <Link to={`/product/${tab.id}`}>
                        <Button variant='primary'>Go somewhere</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    </div>
  );
}
