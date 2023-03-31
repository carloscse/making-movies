
import { render, screen, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import AddGenreForm from "../../components/AddGenreForm";

const mockStore = configureMockStore([thunk]);

describe('AddGenreForm', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            genre: {},
            loading: false,
        });
    });
    it('renders correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <AddGenreForm />
            </Provider>
        );
        const inputAddGenre = screen.getByTestId("inputAddGenre");
        expect(inputAddGenre).toBeInTheDocument();
    });

    it('dispatches addGenre action when form is submitted', () => {
        const store = mockStore({});
        const { getByLabelText, getByText } = render(
          <Provider store={store}>
            <AddGenreForm />
          </Provider>
        );
    
        const input = screen.getByTestId("inputAddGenre");
        const submitButton = getByText('Add');
    
        fireEvent.change(input, { target: { value: 'Test Genre' } });
        fireEvent.click(submitButton);
    
        const actions = store.getActions();
        expect(actions).toEqual([{ type: 'genres/addGenre', payload: { title: 'Test Genre' } }]);
      });
});