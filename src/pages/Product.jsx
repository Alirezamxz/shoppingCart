import React, { useEffect } from "react";
import { productDetailAction } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Row, Col, Image, Badge, Button } from "react-bootstrap";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const { loading, product } = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(productDetailAction(id));
  }, []);

  const addToCartHandler = () => {
    history.push(`/cart/${id}`);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row>
          <Col md='6' className='px-3 pe-md-5 ps-md-0'>
            <Image
              src={product.image}
              alt={product.title}
              className='border rounded'
              fluid
            />
          </Col>
          <Col md='6' className='px-3 pt-4 pt-md-0 px-md-0'>
            <div className='d-flex justify-content-between align-items-center'>
              <h3>{product.title}</h3>
              <h4>
                <Badge>${product.price}</Badge>
              </h4>
            </div>
            <p className='text-muted my-3'>{product.description}</p>
            <Button onClick={addToCartHandler}>
              <i className='fa fa-shopping-cart pr-5'></i> Add To Cart
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Product;
