import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';

const ALL_MOVIES = gql`
  query getMovies {
  allMovies {
  title
  id
  }
  allTweets {
  id
  text
  author {
  userName
  }
  }
  }
`

const Movies = () => {
  const { data, loading } = useQuery(ALL_MOVIES);
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <ul>
      {data.allMovies.map((movie) => (
        <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
      ))}
      {data.allTweets.map((tweet) => (
        <li key={tweet.id}>{tweet.text}</li>
      ))}
    </ul>
  );
};

export default Movies
