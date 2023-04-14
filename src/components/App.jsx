import React from "react";
import AppBar from "./AppBar/AppBar";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage/HomePage"));
const MoviesPage = lazy(() => import("./MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("./MovieDetailsPage/MovieDetailsPage")
);

const App = (props) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/*" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
