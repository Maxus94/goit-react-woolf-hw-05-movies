import { getMovieReviewsByID } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviewsByID(movieId)
      .then(data => setReviews(data.results))
      .catch(error => error.message);
    //   .finally(setLoading(false));
  }, [movieId]);
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
