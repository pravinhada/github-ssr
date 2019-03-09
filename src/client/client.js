// babel-ployfill Uncaught ReferenceError: regeneratorRuntime is not defined error due to async function
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Routes from '../helper/Routes';
import {renderRoutes} from "react-router-config";
import {Provider} from 'react-redux';
import configureStore from '../client/redux/configureStore';

const state = window.INITIAL_STATE;
const store = configureStore(state);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));