import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import reducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


//const composeEnhancers = compose
//const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)))

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store = {store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root'));

registerServiceWorker();
