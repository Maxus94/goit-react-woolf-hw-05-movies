import axios from 'axios';

//axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/'
// const baseURL = 'https://api.escuelajs.co/api/v1'

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/all/';
axios.defaults.headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmQ2OWI3NDY1OGQwOTRlNDgzY2VmNzhhZmE5NDI4YSIsInN1YiI6IjY1ZGQ5M2VmM2ZmMmRmMDE2NDBhODdiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GWyNMjSLIs8SiX8wXjHOjJnKl-N0SjUtPPkk85oPTQ',
};
export const getPopularMovies = async () => {
  const { data } = await axios(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US'
  );
  return data;
};

// export const getSingleProductApi = async (id) => {
// 	const { data } = await axios(`products/${id}`)
// 	return data
// }

// export const deleteProductApi = async (id) => {
// 	// const { data } = await axios(`products/${id}`)
// 	const { data } = await axios.delete('products', { params: { id } })
// 	return data
