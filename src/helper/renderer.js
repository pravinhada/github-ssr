import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from "react-router-dom";
import Routes from './Routes';
import {renderRoutes} from "react-router-config";

export default (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
    );

    return `
       <html>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="/css/main.css"/>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/js/bundle.js"></script>
        </body>
        </html>
    `;
}
