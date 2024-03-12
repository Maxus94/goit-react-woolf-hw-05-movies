import css from './Home.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = ({ movies }) => {
  return (
    <div className={css.homeContainer}>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
