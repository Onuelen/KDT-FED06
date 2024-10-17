import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  width:100%;
  margin:0 auto;
  justify-content: center;
`;

const MovieSlide = ({ movies }) => {
  console.log(movies);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };
  return (
    <Wrapper>
      {
        movies && (
          <Carousel responsive={responsive}>
            {movies.results.map((item, index) =>
            (
              <MovieCard key={index} item={item} />)
            )}
          </Carousel>
        )
      }
    </Wrapper>
  );
};

export default MovieSlide
