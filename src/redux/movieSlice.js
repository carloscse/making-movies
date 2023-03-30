import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovie } from './movieAPI';

export const addMovieAsync = createAsyncThunk(
    'movies/addMovieAsync',
    async (data) => {
        const response = await fetchMovie(data);
        return response.data;
    }
);

export const deleteMovieAsync = createAsyncThunk(
    'movies/deleteMovieAsync',
    async (data) => {
        const response = await fetchMovie(data);
        return response.data;
    }
);

export const filterMoviesByGenreAsync = createAsyncThunk(
    'movies/filterMoviesByGenreAsync',
    async (data) => {
        const response = await fetchMovie(data);
        return response.data;
    }
);

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [
            { id: 0, title: "Scream", tags: ["horror"], watched: false},
            { id: 1, title: "Groundhog Day", tags: ["comedy"], watched: false},
            { id: 2, title: "Back to the Future", tags: [], watched: true}
        ],
        moviesContainer: [
            { id: 0, title: "Scream", tags: ["horror"], watched: false},
            { id: 1, title: "Groundhog Day", tags: ["comedy"], watched: false},
            { id: 2, title: "Back to the Future", tags: [], watched: true}
        ],
        loading: false
    },
    reducers: {
        addMovie: (state, action) => {
            const newMovie = {
                id: state.movies.length,
                title: action.payload.title,
                tags: [],
                watched: false
            };
            state.movies.push(newMovie);
            state.moviesContainer.push(newMovie);
        },
        editMovie: (state, action) => {
            const index = state.movies.findIndex(
                (movie) => movie.id === action.payload.id
            )
            state.movies[index].title = action.payload.title
            state.moviesContainer[index].title = action.payload.title
        },
        toggleWatch: (state, action) => {
            const index = state.movies.findIndex(
                (movie) => movie.id === action.payload.id
            )
            state.movies[index].watched = action.payload.watched
            state.moviesContainer[index].watched = action.payload.watched

            if(state.movies[index].watched === true) {
                state.movies.push(state.movies.splice(index, 1)[0]);
                state.moviesContainer.push(state.moviesContainer.splice(index, 1)[0]);
            } else {
                var previousIndex = index
                state.movies.splice(0, 0, state.movies[index]);
                state.movies.splice(previousIndex + 1, 1);
                state.moviesContainer.splice(0, 0, state.moviesContainer[index]);
                state.moviesContainer.splice(previousIndex + 1, 1);
            }
        },
        deleteMovie: (state, action) => {
            state.movies = state.movies.filter((movie) => movie.id !== action.payload.id)
            state.moviesContainer = state.moviesContainer.filter((movie) => movie.id !== action.payload.id)
        },
        addMovieGenre: (state, action) => {
            const index = state.movies.findIndex(
                (movie) => movie.id === action.payload.id
            )
            if(state.movies[index].tags.indexOf(action.payload.title)){
                state.movies[index].tags.push(action.payload.title)
                state.moviesContainer[index].tags.push(action.payload.title)
            }
        },
        filterMoviesByName: (state, action) => {
            if(action.payload.value === '') {
                state.movies = state.moviesContainer
            } else {
                state.movies = state.moviesContainer.filter((movie) => movie.title.toLowerCase().includes(action.payload.value.toLowerCase()))
            }
        },
        filterMoviesByGenre: (state, action) => {
            state.movies = state.moviesContainer.filter((movie) => movie.tags.includes(action.payload.value))
        },
        resetFilters: (state, action) => {
            state.movies = state.moviesContainer
        }
    },
    extraReducers: {
        [addMovieAsync.pending]: (state, action) => {
            state.loading = true;
        },
        [addMovieAsync.fulfilled]: (state, action) => {
            state.loading = false;
            const newMovie = {
                id: state.movies.length,
                title: action.payload.title,
                tags: [],
                watched: false
            };
            state.movies.push(newMovie);
            state.moviesContainer.push(newMovie)
        },
        [deleteMovieAsync.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteMovieAsync.fulfilled]: (state, action) => {
            state.loading = false;
            state.movies = state.movies.filter((movie) => movie.id !== action.payload.id)
            state.moviesContainer = state.moviesContainer.filter((movie) => movie.id !== action.payload.id)
        },
        [filterMoviesByGenreAsync.pending]: (state, action) => {
            state.loading = true;
        },
        [filterMoviesByGenreAsync.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action.payload.value)
            state.movies = state.moviesContainer.filter((movie) => movie.tags.includes(action.payload.value))
        }
    }
});

export const { 
    addMovie,
    editMovie,
    toggleWatch,
    deleteMovie,
    addMovieGenre,
    filterMoviesByName,
    filterMoviesByGenre,
    resetFilters
} = movieSlice.actions

export default movieSlice.reducer;