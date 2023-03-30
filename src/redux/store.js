import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import genreReducer from './genreSlice';

export default configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer
    }
})