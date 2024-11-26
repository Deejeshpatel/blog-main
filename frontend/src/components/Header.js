import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="header-logo">Blog</Link>
                <nav className="header-nav">
                    <Link to="/" className="header-link">Home</Link>
                    <Link to="/create" className="header-link">Create Post</Link>
                    <Link to="/" className="header-link">Help</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
