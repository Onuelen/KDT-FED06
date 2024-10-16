import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { productAction } from "../redux/actions/productAction";
import { useDispatch } from "react-redux";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
        {/* {productList.map((menu, index) => (
          <Col key={menu.id} lg={3}>
            <ProductCard key={menu.id} item={menu} />
          </Col>
        ))} */}
      </Row>
    </Container>
  );
};

export default ProductAll;
