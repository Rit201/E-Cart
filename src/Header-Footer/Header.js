import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {

    const Count = props.Count;

    return (
        <div className="Header">
            <div className='Logo-Image'>
                <img src="data:image/jpeg;base64,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"
                    alt="logo" />
                SHOPINGKART
            </div>
            <div className="Search">
                <label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input type="search" placeholder="Search..." />
                </label>
            </div>
            <Link to="/" className='HomeTab'>
                Home
            </Link>
            <Link to="/cart" className="cartIcon">
                <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="0.4" stroke="#574fdf" width="27" height="27" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span className="cartCount">{Count.length}</span>
            </Link>
        </div>
    );
}
export default Header;  