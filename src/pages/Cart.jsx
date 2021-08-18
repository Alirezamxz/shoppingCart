import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartAction";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";

const Cart = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id));
    }
  }, [dispatch, id]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Row>
      <Col md={8}>
        {cartItems.length === 0 ? (
          <div className='card h-100 text-center'>
            <span className='my-auto'>Your cart is currently empty</span>
          </div>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row className='d-flex align-items-center'>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={5}>{item.title}</Col>
                  <Col md={4}>${item.price}</Col>
                  <Col md={1}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.id)}>
                      <i className='fa fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item className='d-flex justify-content-between py-3'>
              Total Price
              <span>
                ${cartItems.reduce((acc, item) => acc + item.price, 0)}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='w-100 py-2 my-2' size='sm'>
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
