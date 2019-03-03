import React from 'react';
import App from '../client/components/App';
import Home from '../client/components/Home';
import Battle from '../client/components/Battle';
import Popular from '../client/components/Popular'
import Results from '../client/components/Results';

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...Battle,
                path: '/battle',
                exact: true
            },
            {
                ...Results,
                path: '/battle/results'
            },
            {
                ...Popular,
                path: '/popular'
            }
        ]
    }
];
