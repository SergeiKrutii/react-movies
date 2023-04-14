const API_KEY = "api_key=05c8c05f68f1ab0460fae7e1305c64b5";
const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING_MOVIE = "/trending/movie/week?";

async function fetchMovie(url = "", config = {}) {
  try {
    const response = await fetch(url, config);
    const results = await response.json();

    return results;
  } catch (error) {
    return Promise.reject(new Error("Not found"));
  }
}

export function getTrendingMovie() {
  return fetchMovie(`${BASE_URL}${TRENDING_MOVIE}${API_KEY}`);
}

export function getOneMovie(movieId) {
  return fetchMovie(`${BASE_URL}/movie/${movieId}?${API_KEY}`);
}

export function getActors(movieId) {
  return fetchMovie(`${BASE_URL}/movie/${movieId}/credits?${API_KEY}`);
}
export function getReview(movieId) {
  return fetchMovie(`${BASE_URL}/movie/${movieId}/reviews?${API_KEY}`);
}

export function getQueryMovie(query = "") {
  return fetchMovie(`${BASE_URL}/search/movie?${API_KEY}&query=${query}`);
}
