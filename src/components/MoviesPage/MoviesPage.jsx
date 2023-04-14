import { useEffect, useState } from "react";

import { Link, useLocation, useSearchParams } from "react-router-dom";
import * as api from "../../api/fetchMovie";
import { StyledPage } from "./StyledMoviePage";

const STORAGE_KEY = "query";

const MoviesPage = (props) => {
  const [input, setInput] = useState(
    () => window.localStorage.getItem(STORAGE_KEY) ?? ""
  );
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams("");

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      const query = localStorage.getItem(STORAGE_KEY);
      api.getQueryMovie(query).then((data) => {
        const { results } = data;

        setMovie(results);
      });
    }
    const param = searchParam(input);
    setSearchParams(param);
  }, [input, setSearchParams]);

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const searchParam = (input) => {
    const param = { query: `${input}` };
    return param;
  };
  const onSubmit = (e) => {
    e.preventDefault();

    api.getQueryMovie(input).then((data) => {
      const { results } = data;
      setMovie(results);
    });
    localStorage.setItem(STORAGE_KEY, input);
    const param = searchParam(input);
    setSearchParams(param);
  };

  return (
    <StyledPage>
      <h1 className="search-title">Search movie by name...</h1>
      <form onSubmit={onSubmit} className="serch-form">
        <input
          onChange={inputChange}
          className="form-input"
          type="text"
          name="query"
          value={input}
        />
        <button className="form-button" type="submit">
          Search
        </button>
      </form>
      <hr />
      <ul className="form-list">
        {movie.length !== 0 && (
          <h2>Here are the movies we found for your request {`"${input}"`}</h2>
        )}
        {movie &&
          movie.map((elem) => (
            <li key={elem.id}>
              <Link to={`/movies/${elem.id}`} state={{ from: location }}>
                {elem.title}
              </Link>
            </li>
          ))}
      </ul>
    </StyledPage>
  );
};

export default MoviesPage;
