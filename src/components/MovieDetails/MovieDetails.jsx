import { getMoviesByID } from 'api/movies';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const searchMovies = async id => {
    try {
      const data = await getMoviesByID(id);
      console.log(data);
      // setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  searchMovies(movieId);
  return <div>details</div>;
};

export default MovieDetails;
