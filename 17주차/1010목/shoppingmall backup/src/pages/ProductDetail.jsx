import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 22px;
  padding: 10px;
`;

const ProductTitle = styled.div`
  font-weight: 600;
`;

const ProductPrice = styled.div`
  font-size: 18px;
`;

const ProductChoice = styled.div``;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(""); // 선택한 사이즈를 저장할 상태
  const { id } = useParams();

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/Onuelen/musinsa/products/${id}`;
    console.log("Fetching product with ID:", id);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch product details:", error.message);
      setProduct(null);
    }
  };

  useEffect(() => {
    if (id) {
      getProductDetail();
    }
  }, [id]);

  const formattedPrice = product
    ? new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
      }).format(product.price)
    : "";

  const handleSizeSelect = (size) => {
    setSelectedSize(size); // 선택된 사이즈를 상태로 저장
  };

  return (
    <Container>
      <Row>
        <Col>
          <Img src={product?.img} alt={product?.id} />
        </Col>
        <Col>
          <ProductDesc>
            <ProductTitle>상품명 : {product?.title}</ProductTitle>
            <ProductPrice>상품가격 : {formattedPrice}</ProductPrice>
            <ProductChoice>
              {product?.choice ? "Conscious choice" : ""}
            </ProductChoice>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                {selectedSize
                  ? `선택된 사이즈: ${selectedSize}`
                  : "사이즈 선택"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product?.size?.length > 0 &&
                  product.size.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleSizeSelect(item)} // 클릭 시 선택된 사이즈 업데이트
                    >
                      {item}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="warning">장바구니</Button>
            <Button variant="danger">상품결제</Button>
          </ProductDesc>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
