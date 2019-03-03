import React from 'react';
import Nav from './Nav';
import {renderRoutes} from "react-router-config";

const App = ({route}) => {
    return (
        <div>
            <Nav/>
            {renderRoutes(route.routes)}
        </div>
    );
};

export default {
    component: App
};