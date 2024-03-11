import { getMoviesByQuery } from 'api/movies';
import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ search: form.elements.text.value });
    form.reset();
  };

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const data = await getMoviesByQuery(searchText);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const query = searchParams.get('search');
    query && setSearchText(query);
    searchMovies();
  }, [searchParams, searchText]);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
