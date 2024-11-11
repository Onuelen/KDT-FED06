import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence, delay, useScroll } from "framer-motion";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "../utills";

const Container = styled.div`
  width: 100%;
  height: 105vh;
  margin-top: 60px;
  /* background: ${(props) => props.theme.black.lighter}; */
  display: flex;
  flex-direction: column;
  align-items: end;
  background: #000;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: ${(props) => props.theme.red};
`;

const Banner = styled.div<{ bgPhoto: string | undefined }>`
  color: ${(props) => props.theme.white.darker};
  width: 80%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  padding: 100px 30px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto}) center/cover no-repeat;
`;

const Title = styled.h2`
  margin-left: -380px;
  font-size: 58px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  margin-left: -376px;
  font-size: 24px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)<{ bgPhoto: string | undefined }>`
  width: auto;
  height: 200px;
  background: url(${(props) => props.bgPhoto}) center/cover no-repeat;
  font-size: 22px;
  color: #fff;
  box-shadow: 6px 6px 14px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    z-index: 1;
    box-shadow: 0px 4px 32px 0 rgba(0, 0, 0, 0.7);
  }
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
  opacity: 1;
  border-radius: 5px;
  /* background: ${(props) => props.theme.black.lighter}; */
  background: rgba(74, 74, 74, 0.05);
  box-shadow: 2px 4px 24px 0 rgba(102, 102, 102, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  h4 {
    text-align: center;
    font-size: 16px;
  }
`;

const ModalBox = styled(motion.div)`
  position: fixed;
  top: scrollY.get() + 100;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: auto;
  overflow: hidden;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.white.darker};
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 32px 20px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* overflow: hidden; */
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  cursor: pointer;
`;

const MovieCover = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
`;

const MovieTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  text-align: center;
  font-size: 20px;
  padding: 16px;
  padding-bottom: 0;
`;

const MovieOverView = styled.p`
  padding: 20px;
  line-height: 2;
  padding: 30px;
  position: relative;
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.3,
    y: -50,
    transition: { delay: 0, duration: 0.2, type: "tween" },
  },
};

const inforVariants = {
  hover: {
    opacity: 0,
    transition: { delay: 0.2, duration: 0.2, type: "tween" },
  },
};

const offset = 6;

const Home = () => {
  const history = useNavigate();
  const movieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  console.log(movieMatch);

  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const { scrollY } = useScroll();

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    history(`/`);
  };

  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id === Number(movieMatch.params.movieId)
    );

  console.log(clickedMovie);
  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[1].backdrop_path || "")}
          >
            <Title>{data?.results[1].title}</Title>
            <Overview>{data?.results[1].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2)
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      onClick={() => onBoxClick(movie.id)}
                      key={movie.id}
                      layoutId={movie.id + ""}
                      variants={boxVariants}
                      bgPhoto={makeImagePath(movie.backdrop_path || "")}
                      initial="normal"
                      whileHover="hover"
                    >
                      <Info variants={inforVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {movieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  style={{ top: scrollY.get() + 100 }}
                  layoutId={movieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <MovieCover
                        src={makeImagePath(clickedMovie.backdrop_path, "w500")}
                        alt="movieImg"
                      />
                      <MovieTitle>{clickedMovie.title}</MovieTitle>
                      <MovieOverView>{clickedMovie.overview}</MovieOverView>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;
