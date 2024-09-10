import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  width: calc(100% -32px);
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 16px;
`;

const Container = styled.div`
  width: 100%;
  mac-width: 720px;
  & * {
    margin-bottom: 16px;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={data}
          onClickItem={(item) => navigate(`/post/${item.id}`)}
        />
      </Container>
    </Wrapper>
  );
};

export default MainPage;
