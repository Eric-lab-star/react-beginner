import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { movieDB } from "../db";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});
  const getMovies = async () => {
    const DB = await movieDB();

    setMovies(DB);

    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading
        ? "Loading...data"
        : movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                id={movie.id}
                title={movie.title}
                genres={movie.genres}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      <Outlet />
    </div>
  );
};

export default Home;
