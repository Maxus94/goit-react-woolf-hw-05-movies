import { Link, useLocation } from 'react-router-dom';

const Home = ({ movies }) => {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   const formMoviesList = async id => {
  //     try {
  //       const data = await getPopularMovies();
  //       setMovies(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   formMoviesList();
  // }, []);

  const location = useLocation();

  return (
    <div>
      Trending today
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title ? movie.title : movie.name}
            </Link>

            {/* <a
              href={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            >
              {movie.title ? movie.title : movie.name}
            </a> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
