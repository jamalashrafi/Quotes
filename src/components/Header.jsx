import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>Quotes</div>
            <div>
                <NavLink to='/all-quotes'>All Quotes</NavLink>
                <NavLink to='/add-a-quote'>Add a Quote</NavLink>
            </div>
        </div>
    )
}

export default Header
