import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="center-align" style={{marginTop: '200px'}}>
                <h3>Github Battle: Battle your friends... and stuff!</h3>
                <Link className="btn waves-effect waves-light red lighten-2" to='/battle'>Battle</Link>
            </div>
        );
    }
}

export default {
    component: Home
};