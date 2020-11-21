import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import App from './App';
import './index.css';

// 1. ACTION -> Describes what we are going to do e.g Increment. It is descring not doing.
// 2. REDUCER -> Describes how your actions transforms state to the next state.
// 3. STORE -> Globalized State.
// 4. DISPATCH -> Here we axecute the action.

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
