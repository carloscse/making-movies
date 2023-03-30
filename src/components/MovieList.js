import React from 'react';
import AddMovieForm from './AddMovieForm';
import MovieItem from './MovieItem';
import { useDispatch, useSelector } from 'react-redux';
import { filterMoviesByName, filterMoviesByGenreAsync, resetFilters } from '../redux/movieSlice';

const MovieList = () => {
	const movies = useSelector((state) => state.movies.movies);

	const dispatch = useDispatch();

	const handleTitleInput = (event) => {
		event.preventDefault();
		dispatch(filterMoviesByName({
			value: event.target.value,
		}))
	};

	const handleGenreSelect = (event) => {
		event.preventDefault();
		dispatch(filterMoviesByGenreAsync({
			value: event.target.value,
		}))
	};
	const handleResetFilters = (event) => {
		event.preventDefault();
		dispatch(resetFilters())
	};
	
	return (
		<div>
			<div className='filtersSection'>
				<div className='sectionTitle'>Filters</div>
				<div className='filtersActions'>
					<div>
						<p>Filter by name:</p>
						<input type='text' className='form-control' placeholder='Search title' onChange={(event) => handleTitleInput(event)}></input>
					</div>
					<div>
						<p>Filter by genre:</p>
						<ul className="movieFilters">
							<li>
								<label>
									<input type="radio" value="Horror" name="filters" onChange={handleGenreSelect} />
									Horror
								</label>
							</li>
							<li>
								<label>
									<input type="radio" value="Romance" name="filters" onChange={handleGenreSelect} />
									Romance
								</label>
							</li>
							<li>
								<label>
									<input type="radio" value="Comedy" name="filters" onChange={handleGenreSelect} />
									Comedy
								</label>
							</li>
						</ul>
					</div>
					<button className='btn btn-danger' onClick={handleResetFilters}>Reset</button>
				</div>
			</div>
			
			<AddMovieForm />
			<ul className='listMovies'>
				{movies.map((movie) => (
					<MovieItem key={movie.id} id={movie.id} title={movie.title} tags={movie.tags} watched={movie.watched} />
				))}
			</ul>
		</div>
	);
};

export default MovieList;
