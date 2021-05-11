import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
                <div className="navbar-brand">
                    Note App
                </div>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}