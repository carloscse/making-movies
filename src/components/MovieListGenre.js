import React from 'react';
import { useParams } from 'react-router-dom'
import MovieItem from './MovieItem';
import { useSelector } from 'react-redux';

const MovieList = () => {
	const { id } = useParams()
	const movies = useSelector((state) => state.movies.movies);


	return (
		<div>
			<ul className='listMovies'>
				<div className='sectionTitle'>{id.charAt(0).toUpperCase() + id.slice(1)} movies</div>

				{movies.map((movie) => (
					<MovieItem key={movie.id} id={movie.id} title={movie.title} tags={movie.tags} watched={movie.watched} />
				))}
			</ul>
		</div>
	);
};

export default MovieList;
