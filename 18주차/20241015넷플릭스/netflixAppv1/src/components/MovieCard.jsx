import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { Badge } from 'react-bootstrap';

const Wrapper = styled.div`
  width:300px;
  height:200px;
  position:relative;
  cursor: pointer;
  
`;


const Img = styled.img`
width:100%;
height:100%;
object-fit:cover;
`;

const Title = styled.h1`
font-size:20px;
  width:100%;
position:absolute;
top:10px;
left:10px;
`;

const Adult = styled.div`
  position:absolute;
  top:10px;
  right:10px;
  background:rgba(220,20,60,0.8);
  padding:10px;
  width:50px;
  height:50px;
  border-radius:50%;
  line-height:28px;
  font-size:14px;
  box-shadow:4px 8px 8px rgba(0,0,0,0.7)
`;

const InfoGroup = styled.div`
  width:100%;
  position:absolute;
  align-items: center;
  display:flex;
  bottom:10px;
  justify-content:space-between;
  padding:0 10px;
`;

const Genre = styled.div`
display:flex;
gap:6px;
`;

const Vote = styled.span`
  
`;


const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <Wrapper>
      <Img
        src={`https://media.themoviedb.org/t/p/original/${item.backdrop_path}`}
      />
      <Title>{item.title}</Title>
      <Adult>{item.adult ? "18세이상" : "전체"}</Adult>
      <InfoGroup>
        <Genre>{item.genre_ids.map((id, index) => (
          <Badge key={index}>
            {genreList.find((item) => item.id === id).name}
          </Badge>
        ))}
        </Genre>
        <Vote>{item.vote_average}</Vote>
      </InfoGroup>
    </Wrapper>
  );
};

export default MovieCard;
