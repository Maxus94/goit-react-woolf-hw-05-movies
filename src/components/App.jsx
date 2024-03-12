import { useEffect, useState, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getPopularMovies } from 'api/movies';

import MainLayout from 'layouts/MainLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const formMoviesList = async id => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    formMoviesList();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home movies={movies} />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
