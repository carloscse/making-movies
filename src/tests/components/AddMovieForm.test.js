
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import AddMovieForm from "../../components/AddMovieForm";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import { addMovieAsync } from "../../redux/movieSlice";

const mockStore = configureMockStore([thunk]);

describe('AddMovieForm', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            movies: {},
            loading: false,
        });
    });
    it('renders correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <AddMovieForm />
            </Provider>
        );
        const inputAddMovie = screen.getByTestId("inputAddMovie");
        expect(inputAddMovie).toBeInTheDocument();
    });

    it('adds a movie to the state', async () => {
        const store = mockStore({ movies: [] });
        const movieTitle = 'Interstellar';
    
        await store.dispatch(addMovieAsync({
			title: movieTitle,
		}));
        const actions = store.getActions();
        expect(actions[0].type).toEqual('movies/addMovieAsync/pending');
        expect(actions[1].type).toEqual('movies/addMovieAsync/fulfilled');
        
        // expect(actions).toEqual([
        //     { type: 'movieSlice/addMovieAsync/pending' },
        //     { type: 'movieSlice/addMovieAsync/fulfilled', payload: movieTitle }
        // ]);
        // const state = store.getState();
        // console.log(state)
        // expect(state.movies).toEqual([movieTitle]);
    });
});