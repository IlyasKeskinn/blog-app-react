import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import configureAppStore from './store/configureStore';
import { Provider } from 'react-redux';
import { applyMiddleware ,compose } from 'redux';
import { thunk } from 'redux-thunk';
import { getBlogsFromDataBase } from './actions/blogsActions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = configureAppStore(composeEnhancers(applyMiddleware(thunk)));


store.dispatch(getBlogsFromDataBase())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

