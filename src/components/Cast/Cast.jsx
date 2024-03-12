import { getMovieCastByID } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';
  useEffect(() => {
    setLoading(true);
    getMovieCastByID(movieId)
      .then(data => setCast(data.cast))
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <div>
      {error && <p>Error! {error}</p>}
      {loading && <p>Loading...</p>}
      {cast.length > 0 && (
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
      )}
    </div>
  );
};

export default Cast;
