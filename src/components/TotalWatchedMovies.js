import React from 'react';
import { useSelector } from 'react-redux';

const TotalWatchedMovies = () => {
	const watchedMovies = useSelector((state) => state.movies.movies.filter((movie) => movie.watched === true))

	return <div className='sectionTitle totalMoviesWatched'>Total Movies Watched: { watchedMovies.length }</div>;
};

export default TotalWatchedMovies;
