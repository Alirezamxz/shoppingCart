import React from "react";
import { Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Container className='my-5'>
      <div className='d-flex justify-content-between mb-5'>
        <Link to='/' className='text-dark text-decoration-none'>
          <h3>Shop</h3>
        </Link>
        <Link to='/cart' className='text-dark text-decoration-none'>
          <i className='fa fa-shopping-cart' style={{ fontSize: "25px" }}></i>
        </Link>
      </div>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
