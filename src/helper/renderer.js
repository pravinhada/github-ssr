import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from "react-router-dom";
import Routes from './Routes';
import {renderRoutes} from "react-router-config";
import {Provider} from 'react-redux';
import configureStore from '../client/redux/configureStore';
import serialize from 'serialize-javascript';

const state = {
    languages: ["All", "JavaScript", "Java", "Ruby", "CSS", "Python", "PHP"],
    selectedLanguage: "All"
};

export default (req) => {
    const store = configureStore(state);
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    return `
       <html>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="/css/main.css"/>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE=${serialize(store.getState())}
            </script>
            <script src="/js/bundle.js"></script>
        </body>
        </html>
    `;
}
