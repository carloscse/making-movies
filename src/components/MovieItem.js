import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editMovie, toggleWatch, deleteMovieAsync } from '../redux/movieSlice';
import AddMovieGenreForm from './AddMovieGenreForm';

const MovieItem = ({ id, title, tags, watched }) => {
	const [value, setValue] = useState(title);

	const dispatch = useDispatch();

	const handleWatchedClick = () => {
		dispatch(toggleWatch({ id: id, watched: !watched }))
	}

	const handleEditClick = (e) => {
		e.target.nextElementSibling.style.display = 'block'
		e.target.style.display = 'none'
		e.target.previousElementSibling.style.display = 'none'
	}

	const handleDeleteClick = () => {
		dispatch(deleteMovieAsync({ id: id }))
	}

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(editMovie({
			id: id,
			title: value,
		}))
		event.target.style.display = 'none'
		event.target.previousElementSibling.style.display = 'block'
		event.target.previousElementSibling.previousElementSibling.style.display = 'block'
	};

	return (
		<li key={id} className={`movieGroupItem ${watched && 'movieGroupItemWatched'}`}>
			<div  data-testid="movieItemTestId" className='movieItem'>
				<div className='movieTitleDiv'>
					<p className="movieTitle">{title}</p>
					<button className='btn btn-info' onClick={handleEditClick}>Edit</button>
					<form onSubmit={onSubmit} className='edit-title form-inline'>
						<input type='text' name="title" className='form-control' value={value} onChange={(event) => setValue(event.target.value)}></input>
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</form>
				</div>
				<div className='movieTagSection'>
					<ul className='movieTags'>
						{tags.map((tag) => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
					<AddMovieGenreForm id={id} />
				</div>
				<div className='movieActions'>
					<div className='movieActionWatch'>
						<label>Watched</label>
						<input type='checkbox' checked={watched} onChange={handleWatchedClick}></input>
					</div>
					<button className='btn btn-danger' onClick={handleDeleteClick}>Delete</button>
				</div>
			</div>
		</li>
	);
};

export default MovieItem;
