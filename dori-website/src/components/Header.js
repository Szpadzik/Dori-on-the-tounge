import React from "react";
//import Link from 'react-scroll';
import logo from '../assets/medical.png';


function Header() {

    return (
        <div className="container">
            <div className="header">
                <div className="logo"> learn with Dori </div>
                <div className="menu">
                    <ul>
                        <li className="nav">home</li>
                        <li className="nav">about me</li>
                        <li className="nav">contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
