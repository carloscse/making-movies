import React from 'react';
import MovieListGenre from './components/MovieListGenre';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';


const GenrePage = () => {

	const loading = useSelector((state) => state.movies.loading);
	return (
		<div>
			<Loader show={loading} />
			<MovieListGenre />				
		</div>
	);
};

export default GenrePage;
