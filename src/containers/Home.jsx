import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, fetchProducts } from '../redux/actions/productActions';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Home() {
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const removeProduct = id => {
    dispatch(deleteProducts(id));
  };
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
                      <Row>
                        <Link to={`/product/${tab.id}`}>
                          <Button variant='primary'>Go somewhere</Button>
                        </Link>

                        <Button
                          onClick={() => removeProduct(tab.id)}
                          variant='primary'
                        >
                          Delete
                        </Button>
                      </Row>
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
