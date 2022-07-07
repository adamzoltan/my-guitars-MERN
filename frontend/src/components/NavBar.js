import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from  './NavBar.module.css'

const NavBar = () => {
    return (
        <header className={classes['header']}>
            <nav>
                <ul>
                    <li>
                        <NavLink  to="/my-guitars">My Guitars</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/wishlist">Wishlist</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar