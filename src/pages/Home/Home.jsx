// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
// Посилання на документацію

import { Link } from 'react-router-dom';

// У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

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

  return (
    <div>
      Trending today
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
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
