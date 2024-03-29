import { getMovieReviewsByID } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getMovieReviewsByID(movieId)
      .then(data => setReviews(data.results))
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [movieId]);
  return (
    <div>
      {error && <p>Error! {error}</p>}
      {loading && <p>Loading...</p>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p className={css.author}>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any review for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
