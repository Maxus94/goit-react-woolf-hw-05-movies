import { getMoviesByID } from 'api/movies';
import { useEffect, useState, useRef } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  // const ref = useRef(location.state?.from ?? '/');
  const ref = useRef(location);
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  const searchMovies = async id => {
    try {
      const data = await getMoviesByID(id);
      setMovieInfo(data);
      // setMovies(data.results);
    } catch (error) {}
  };
  useEffect(() => {
    searchMovies(movieId);
  }, [movieId]);
  console.log(ref.current);
  return (
    <div>
      <Link to={ref.state?.from ?? '/'}>Go back</Link>
      {/* <Link to={location.state?.from ?? '/'}>Go back</Link> */}
      {/* {location.state && <Link to={'/'}>Go back</Link>} */}
      {movieInfo.original_title} ({movieInfo.release_date}){movieInfo.overview}
      <img
        src={
          movieInfo.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
