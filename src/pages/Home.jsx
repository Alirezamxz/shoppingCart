import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../actions/productAction";
import { Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(productListAction());
  }, []);

  return (
    <Row>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      )}
    </Row>
  );
};

export default Home;
