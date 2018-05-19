import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import reducer from './reducers';
// import logger from 'redux-logger';


// we could use redux-persist instead
const persistedState = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : {}
const store = createStore(
    reducer,
    // applyMiddleware(logger),
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>{
    localStorage.setItem('items', JSON.stringify(store.getState()))
});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));