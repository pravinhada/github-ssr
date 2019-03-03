import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Github Battle</Link>
                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/battle">Battle</Link>
                    </li>
                    <li>
                        <Link to='/popular'>Popular</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;