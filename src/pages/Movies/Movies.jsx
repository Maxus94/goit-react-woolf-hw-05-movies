import { getMoviesByQuery } from 'api/movies';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const handleChange = evt => {
    evt.preventDefault();
    setSearchText(evt.target.value);
  };
  const searchMovies = async () => {
    try {
      const data = await getMoviesByQuery(searchText);
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
    setSearchText('');
  };
  // console.log(movies);

  return (
    <div>
      <input onChange={handleChange} type="text" value={searchText} />
      <button onClick={searchMovies}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
