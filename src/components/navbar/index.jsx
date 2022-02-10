import * as React from "react";
import { Link, NavLink } from 'react-router-dom';

import './styles.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <Link className="logo" to="/">
                    <h3>Ismael Cleiton</h3>
                </Link>
            </div>

            <div>
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/blog">Blog</NavLink>
                <NavLink className="navlink" to="/sobre">Sobre</NavLink>
            </div>
        </nav>
    );
}