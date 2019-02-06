import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () =>(
    <nav>
        <ul className="nav">
            <li>
                <Link to="/">Search</Link>
            </li>
            <li>
                <Link to="/mountain-collective">Mountain Collective</Link>
            </li>
            <li>
                <Link to="/ikon">IKON Pass</Link>
            </li>
            <li>
                <Link to="/epic">Epic Pass</Link>
            </li>
        </ul>
    </nav>
)

export default Header;