import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ResultData } from "../assets/resultdata";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
`;

const Header = styled.div`
  font-size: 40px;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
  line-height: 1.4;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #fff;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 24px;
  text-align: center;
  line-height: 1.4;
`;

const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>🐣예비 집사 판별기🐈</Header>
      <Contents>
        <Title>🐾결과 보기🐾</Title>
        <LogoImg>
          <img className="rounded-circle" src={resultData.image} />
        </LogoImg>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는 <br /> {resultData.best}형
          {resultData.name}
        </Desc>
        <Button onClick={handleClickButton}>테스트 다시 실행하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
