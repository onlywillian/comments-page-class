import React from 'react';

import Button from './Button';

import './Header.css'

const Header = () => {
    return ( 
        <div className="head">
            <img src="" alt="Era p ter uma logo aq" />

            <div className="menu-items">
                <span>Home</span>
                <span>Comentários</span>
                <span>Sobre nozes</span>

                <Button>Login</Button>
            </div>
        </div>
    );
}
 
export default Header;