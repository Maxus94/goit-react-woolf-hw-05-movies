import { useEffect, useState } from 'react';
import MainLayout from 'layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import { getPopularMovies } from 'api/movies';

// const API_KEY = '42d69b74658d094e483cef78afa9428a';

export const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const formMoviesList = async id => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    formMoviesList();
  }, []);
  console.log(movies);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home movies={movies} />} />
        <Route path="movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
        <Route path="movies/:poster_path" element={<div>lkjlkjk</div>} />
      </Route>
    </Routes>
  );
};

// {
//   // /* <div
//   //     style={{
//   //       height: '100vh',
//   //       display: 'flex',
//   //       justifyContent: 'center',
//   //       alignItems: 'center',
//   //       fontSize: 40,
//   //       color: '#010101',
//   //     }}
//   //   >
//   //     React homework template
//   //   </div> */
// }
