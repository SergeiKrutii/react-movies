import React from "react";

import { StyledMovieDetails } from "./StyledMovieDetails";
import * as api from "../../api/fetchMovie";
import { useEffect, useState, lazy, Suspense } from "react";
import {
  Routes,
  Route,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const MovieDetailsPage = (props) => {
  const location = useLocation();
  const { movieId } = useParams();
  const history = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const toNumberedId = Number(movieId);
    api.getOneMovie(toNumberedId).then(setMovie);
  }, [movieId]);

  const goBack = () => {
    history(location?.state?.from?.pathname ?? "/");
  };

  return (
    <>
      {movie && (
        <>
          <button onClick={goBack}>Go back</button>
          <StyledMovieDetails>
            <div className="movie-content">
              <img
                className="movie-img"
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt=""
              />

              <div>
                <h1>{`${movie.title}`}</h1>
                <p className="movie-paragraph">
                  User score: {movie.vote_average}
                </p>
                <p className="movie-paragraph">Owerview</p>
                <p className="movie-owerview">{movie.overview}</p>
                <p className="movie-paragraph">Genres</p>
                <ul className="movie-list">
                  {movie.genres.map((elem) => (
                    <li key={`id-${elem.name}`} className="movie-item">
                      {elem.name}
                    </li>
                  ))}
                </ul>
                <p></p>
              </div>
            </div>

            <h2 className="additional">Additional information</h2>
            <ul className="additional-list">
              <li>
                <NavLink to={"cast"} className={"additional-link"}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to={"reviews"} className={"additional-link"}>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path={`/cast`} element={<Cast />} />
                <Route
                  path={"/reviews"}
                  element={<Reviews movieId={movieId} />}
                />
              </Routes>
            </Suspense>
          </StyledMovieDetails>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
