
import { render, screen, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MovieList from "../../components/MovieList";
import ShallowRenderer from 'react-shallow-renderer';

const mockStore = configureMockStore([thunk]);
const renderer = new ShallowRenderer();

describe('MovieList', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            movies: {
                movies: [
                    { id: 0, title: "Scream", tags: ["horror"], watched: false},
                    { id: 1, title: "Groundhog Day", tags: ["comedy"], watched: false},
                    { id: 2, title: "Back to the Future", tags: [], watched: true}
                ],
            }
        });
    });
    it('renders correctly', () => {
        const { getByText } = renderer.render(
            <Provider store={store}>
                <MovieList />
            </Provider>
        );
        // const filterNameInput = getByTestId("filterNameInput");
        // expect(filterNameInput).toBeInTheDocument();
    });

});