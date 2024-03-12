import { getPopularMovies } from 'api/movies';

import { useState, useEffect } from 'react';

import css from './Home.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const formMoviesList = async () => {
      setLoading(true);
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    formMoviesList();
  }, []);
  return (
    <div className={css.homeContainer}>
      <h2>Trending today</h2>
      {error && <p>Error! {error}</p>}
      {loading && <p>Loading...</p>}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
