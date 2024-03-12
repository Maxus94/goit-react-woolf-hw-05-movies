import { getMoviesByID } from 'api/movies';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const ref = useRef(location.state?.from ?? '/');
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  const searchMovies = async id => {
    setLoading(true);
    try {
      const data = await getMoviesByID(id);
      // data.release_date = data.release_date.slice(0, 4);
      setMovieInfo(data);
      // setMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    searchMovies(movieId);
  }, [movieId]);
  return (
    <div className={css.moviesContainer}>
      <Link className={css.backButton} to={ref.current}>
        Go back
      </Link>
      {error && <p className={css.error}>Error! {error}</p>}
      {loading && <p>Loading...</p>}
      {Object.keys(movieInfo).length !== 0 && (
        <div>
          <div className={css.movieInfoContainer}>
            <img
              src={
                movieInfo.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <div className={css.movieProperties}>
              <p className={css.movieTitle}>
                {movieInfo.original_title} ({movieInfo.release_date.slice(0, 4)}
                )
              </p>
              <p>User score: {Math.round(movieInfo.vote_average * 10)}%</p>
              <p className={css.overview}>Overview</p>
              <p>{movieInfo.overview}</p>
              <p className={css.overview}>Genres</p>
              <p>
                {movieInfo.genres.map(({ name, id }) => (
                  <span key={id} className={css.genre}>
                    {name}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
          {/* <Outlet /> */}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
