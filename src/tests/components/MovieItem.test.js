
import { render, screen, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MovieItem from "../../components/MovieItem";
import ShallowRenderer from 'react-shallow-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);
const renderer = new ShallowRenderer();

describe('MovieItem', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            id: 1,
            title: "Interstellar",
            tags: ['Action', 'Comedy','Drama'],
            watched: false
        });
    });
    it('renders correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <MovieItem id={store.id} title={store.title} tags={store.tags} watched={store.watched} />
            </Provider>
        );
        const headingElement = wrapper.find('[data-testid="movieItemTestId"]');
        expect(headingElement).toHaveLength(1);
    });

});