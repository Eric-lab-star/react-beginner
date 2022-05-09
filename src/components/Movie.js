import { useState } from "react";
import { useParams } from "react-router-dom";
import { movieDB } from "../db";
const Movie = () => {
  let params = useParams();
  const [movie, setMovie] = useState();
  const movieId = parseInt(params.movieId);
  const getMovie = async () => {
    const movies = await movieDB();
    const movie = movies.find((movie) => movie.id === movieId);
    setMovie(movie);
  };
  getMovie();
  return <div>{movie ? <h1>{movie.title}</h1> : null}</div>;
};

export default Movie;
