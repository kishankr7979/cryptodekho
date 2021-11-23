import React from 'react'
import './styles/navbar.css';
import { Link } from "react-router-dom";
import Logo from './assets/logo.png'
const NavBar = () => {
    return (
        <div className="parent-div">
            <div className="nav-bar">
                <span id="active"><Link to="" style={{ textDecoration: "none", color: "white", fontWeight: "Bolder" }}>Crptoदेखो</Link></span>
                <div className="nav-items">
                    <span id="self"><Link to="" style={{ textDecoration: "none", color: "white", fontWeight: "Bolder" }}>Home</Link></span>
                    <span id="self"><Link to="/about" style={{ textDecoration: "none", color: "white" }}>About</Link></span>
                </div>
            </div>

        </div>
    );
}

export default NavBar
