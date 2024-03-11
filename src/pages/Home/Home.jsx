import { Link, useLocation } from 'react-router-dom';

const Home = ({ movies }) => {
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
