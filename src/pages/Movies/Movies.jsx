import { getMoviesByQuery } from 'api/movies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';

import css from './Movies.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');

  const onSearch = query => {
    setSearchParams({ search: query });
  };

  useEffect(() => {
    const query = searchParams.get('search');
    if (!query) return;
    const searchMovies = async () => {
      setLoading(true);
      try {
        const data = await getMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [searchParams]);
  return (
    <div className={css.moviesContainer}>
      <SearchForm onSearch={onSearch} />
      {error && <p>Error! {error}</p>}
      {loading && <p>Loading...</p>}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
