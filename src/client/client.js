import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Routes from '../helper/Routes';
import {renderRoutes} from "react-router-config";

ReactDOM.hydrate(
    <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
    , document.getElementById('root'));