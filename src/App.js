import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import TotalWatchedMovies from './components/TotalWatchedMovies';
import AddGenreForm from './components/AddGenreForm';
import GenreList from './components/GenreList';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';


const App = () => {
	const loading = useSelector((state) => state.movies.loading);
	return (
		<div>
			<Loader show={loading} />
			<MovieList />
			<TotalWatchedMovies />
			<AddGenreForm />
			<GenreList />
				
		</div>
	);
};

export default App;
