import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Wrapper = styled.main`
  width:100%;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size:20px;
  margin:20px 10px;
  padding:10px 20px;
  background:crimson;
  width:200px;
  border-radius:20px;
`;

const Home = () => {
  // const [loading, setLoading] = useState(true); 아래로 로딩을 넣어서 지워도 됨
  const dispatch = useDispatch();
  const { popularMovie, topRatedMovie, upComingMovie, loading } = useSelector(
    (state) => state.movie
  );
  // console.log(popularMovie, topRatedMovie, upComingMovie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader color="#fff" loading={loading} size={150} />
      </Wrapper>
    );
  } else {
    return (
      <div>
        <Banner movie={popularMovie?.results?.[0]} />
        <Title>Popular Movie</Title>
        <MovieSlide movies={popularMovie} />
        <Title>TopRated Movie</Title>
        <MovieSlide movies={topRatedMovie} />
        <Title>Upcoming Movie</Title>
        <MovieSlide movies={upComingMovie} />
      </div>
    );
  }
};

export default Home;