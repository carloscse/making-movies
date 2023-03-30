import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar';
import App from './App';
import GenrePage from './GenrePage';
import store from './redux/store';
import {Provider} from 'react-redux';
import { filterMoviesByGenreAsync } from './redux/movieSlice';


if(window.location.href.includes("genre")) {
	var genre = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
	store.dispatch(filterMoviesByGenreAsync({
		value: genre,
	}))
}
// store.dispatch(initScript())

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route element={<App />} path="/" />
					<Route element={<GenrePage />} path="/genre/:id" />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
