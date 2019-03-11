import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import RootReducer from './rootReducer';
import thunk from 'redux-thunk';
require("@babel/polyfill");
const middlewares = [routerMiddleware(history),thunk];
export const history = createBrowserHistory();
const store = createStore(RootReducer(history),
  compose(applyMiddleware(...middlewares)));
ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
