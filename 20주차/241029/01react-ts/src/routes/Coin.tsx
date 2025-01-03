import React, { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Outlet,
  useMatch,
  Link,
} from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { CoinInterface } from "./Coins";
import { Helmet } from "react-helmet";

const Container = styled.main`
  margin-top: 50px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  font-size: 32px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 2rem;
`;

const Overview = styled.div`
  width: 580px;
  color: ${(props) => props.theme.bgColor};
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  background: ${(props) => props.theme.textColor};
  border-radius: 8px;
  span:first-child {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Description = styled.div`
  background: ${(props) => props.theme.accentColor};
  width: 580px;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Tabs = styled.div`
  width: 580px;
  display: flex;
  gap: 10px;
`;

const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  background: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.accentColor};
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  box-shadow: ${(props) =>
    props.isActive
      ? "inset 0 5px 20px rgba(0, 0, 0, 0.5)"
      : "0 0 0 rgba(0, 0, 0, 0)"};
  padding: 8px 0;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.accentColor};
    box-shadow: inset 0 5px 20px rgba(0, 0, 0, 0.5);
  }
`;

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

// interface InfoData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
// }   Coins.tsx랑 데이터가 같기에 Coins에서 들고오기로 함.

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

interface IsActive {
  isActive: boolean;
}

const Coin = () => {
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { state } = useLocation() as LocationState;
  const { coinId } = useParams<RouterParams | any>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  // useEffect(() => {
  //   (async () => {
  //     const inforData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();

  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();
  //     setInfo(inforData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, []);

  const { isLoading: infoLoading, data: infoData } = useQuery<CoinInterface>({
    queryKey: ["info", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["price", coinId],
    queryFn: () => fetchCoinPrice(coinId),
  });

  const loading = infoLoading || priceLoading;
  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title>{state ? state : loading ? "Loading..." : infoData?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank :</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Is Active :</span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            ✨Information of {infoData?.type} type: Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Autem sapiente aut enim veniam nemo
            fuga quidem error itaque distinctio impedit aspernatur laborum,
            totam necessitatibus laboriosam. Adipisci non magnam odit deserunt.
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply : </span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply :</span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Coin;
