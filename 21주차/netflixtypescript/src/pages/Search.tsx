import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { searchContents, GetMoviesResult, searchGeneres } from "../api";
import { makeImagePath } from "../utills";

const Container = styled.main`
  margin-top: 60px;
  width: 100%;
  background: linear-gradient(to right, #d8d8d8, #ffdbb8);
`;

const SearchBox = styled.div`
  width: 100%;
  padding: 10px;
`;

const MovieSection = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const MovieImg = styled.img`
  width: 50%;
`;

const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 14px;
`;

const MovieTitle = styled.h4`
  font-size: 36px;
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white.lighter};
  border-radius: 8px;
  padding: 0 14px;
`;

const MovieOverView = styled.p`
  font-size: 24px;
  line-height: 1.6;
  border-top: 1px solid ${(props) => props.theme.black.lighter};
  border-bottom: 1px solid ${(props) => props.theme.black.lighter};
  padding: 20px 8px;
`;

const MovieDate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 30px;
    padding-left: 20px;
  }
`;

const MovieRate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 30px;
    margin-bottom: 8px;
    padding-left: 20px;
  }
`;

const RateNumbers = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 30px;
    margin-bottom: 8px;
    padding-left: 20px;
  }
`;

const MovieValue = styled.div`
  font-size: 18px;
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.black.lighter};
  text-align: center;
  line-height: 50px;
  color: ${(props) => props.theme.white.lighter};
  margin-left: 8px;
`;

const Search = () => {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");

  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genereData, isLoading: genereLoading } = useQuery({
    queryKey: ["getGeneres"],
    queryFn: searchGeneres,
  });

  return (
    <Container>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {movieData?.results.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                <MovieImg src={makeImagePath(movie.backdrop_path)} />
                <MovieInfo>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <MovieOverView>{movie.overview}</MovieOverView>
                  <MovieDate>
                    <span>Ralease : {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate : {movie.vote_average?.toFixed(2)} </span>
                  </MovieRate>
                  <RateNumbers>
                    <span>
                      Members : {movie.vote_count?.toLocaleString("ko-kr")}{" "}
                    </span>
                  </RateNumbers>
                  <MovieValue>{movie.adult ? "18+" : "All"}</MovieValue>
                </MovieInfo>
              </MovieSection>
            </SearchBox>
          ))}
        </>
      )}
    </Container>
  );
};

export default Search;
