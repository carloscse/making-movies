import React from 'react';
import { useSelector } from 'react-redux';

const GenreList = () => {
	const genres = useSelector((state) => state.genres);

	return (
		<div data-testid="genreListSectionId" className='genreListSection'>
			<ul className='genreList'>
				{genres.map((genre) => (
					<li key={genre}>{genre}</li>
				))}
			</ul>
		</div>
	);
};

export default GenreList;
