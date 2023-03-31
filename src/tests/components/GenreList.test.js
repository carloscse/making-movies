
import { render, screen, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import GenreList from "../../components/GenreList";

const mockStore = configureMockStore([thunk]);

describe('GenreList', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            genres: ['Action', 'Comedy','Drama'],
        });
    });
    it('renders correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <GenreList />
            </Provider>
        );
        const genreListSection = screen.getByTestId("genreListSectionId");
        expect(genreListSection).toBeInTheDocument();
    });

});