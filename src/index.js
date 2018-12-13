import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './controller/store';
// import Editor from './editor';

ReactDOM.render(
	// <Editor/>,
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
