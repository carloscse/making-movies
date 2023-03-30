import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieAsync } from '../redux/movieSlice';

const AddMovieForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addMovieAsync({
			title: value,
		}))
	};

	return (
		<div className='newMovieSection'>
			<div className="sectionTitle">Add movie</div>
			<form onSubmit={onSubmit} className='form-inline'>
				<input
					type='text'
					className='form-control'
					placeholder='Add movie...'
					value={value}
					onChange={(event) => setValue(event.target.value)}
				></input>

				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
		
	);
};

export default AddMovieForm;
