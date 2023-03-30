import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGenre } from '../redux/genreSlice';

const AddGenreForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addGenre({
			title: value,
		}))
	};

	return (
		<div className='newGenreSection'>
			<div className="sectionTitle">Genres</div>
			<form onSubmit={onSubmit} className='form-inline'>
				<input data-testid="inputAddGenre"
					type='text'
					className='form-control'
					placeholder='Add genre'
					value={value}
					onChange={(event) => setValue(event.target.value)}
				></input>

				<button data-testid="buttonAddGenre" type='submit' className='btn btn-primary'>Add</button>
			</form>
		</div>
	);
};

export default AddGenreForm;
