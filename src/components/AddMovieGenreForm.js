import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovieGenre } from '../redux/movieSlice';

const AddMovieGenreForm = ({ id}) => {
	const genres = useSelector((state) => state.genres);
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addMovieGenre({
			id: id,
			title: value,
		}))
	};

	return (
		<form onSubmit={onSubmit} className='formMovieGenre form-inline'>
			<p>Add Genre to film:</p>
			<select className='form-control' onChange={(event) => setValue(event.target.value)}>
				<option>Select one...</option>
				{genres.map((genre) => (
					<option key={genre} value={genre}>{genre}</option>
				))}
			</select>

			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
};

export default AddMovieGenreForm;
