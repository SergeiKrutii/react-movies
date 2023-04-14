import React from "react";

import * as api from "../../api/fetchMovie";
import { StyledList } from "./StyledLink";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const HomePage = (props) => {
  const [movies, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await api.getTrendingMovie();

      setMovie(results);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Trending for the last week!</h1>
      <StyledList>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          ))}
      </StyledList>
    </>
  );
};

export default HomePage;
