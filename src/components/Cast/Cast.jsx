import { getMovieCastByID } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const defaultImg = 'src/img/cat.jpg';
  useEffect(() => {
    getMovieCastByID(movieId)
      .then(data => setCast(data.cast))
      .catch(error => error.message);
    //   .finally(setLoading(false));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ cast_id, character, name, profile_path }) => (
        <li key={cast_id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : defaultImg
            }
            width={250}
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
