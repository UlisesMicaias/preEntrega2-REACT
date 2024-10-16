import React from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/cart.svg"
import "../styles/navBar.css"

const Navbar = () => {
    return (
        <nav>
        <ul>
            <li>
            <Link to="/">HOME</Link>
            </li>
            <li>
            <Link to="/category/sci-fi">Sci-Fi</Link>
            </li>
            <li>
            <Link to="/category/action">Action</Link>
            </li>
            <li>
            <Link to="/category/drama">Drama</Link>
            </li>
        </ul>
        </nav>
    );
};

export default Navbar;

