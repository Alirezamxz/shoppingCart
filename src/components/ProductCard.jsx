import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ title, id, image, price }) => {
  return (
    <Col md={3} className='mb-4'>
      <Link to={`/products/${id}`} className='text-dark text-decoration-none'>
        <Card className='rounded'>
          <Card.Img src={image} alt={title} />
          <Card.Body className='pt-0 d-flex justify-content-between align-items-center'>
            <span>{title}</span>
            <span>${price}</span>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
