import React from "react";
import './Navbar.css'
import logo from '../assets/blackl.png'
import { BsSearch } from 'react-icons/bs'
import LowerNav from "./new nav/LowerNav";
import { Link } from 'react-router-dom'


let Navbar = () => {
    return (
        <>
            <div className="NavBar">
                <div className="Navcontainer">
                    <div className="Navleft">
                        <Link to='/'>  <img className="Navimg" src={logo} alt="logo" height={40} /></Link>
                        <div className="Navinput-section">
                            <input className="Navinputbox" type="text" placeholder="Search products" />
                            <BsSearch className="Navsearch-icon" />
                        </div>
                    </div>
                    <div className="Navright">
                        <Link to='/login'><button className="Navbutton">log in</button></Link>
                        <Link to='/signin'><button className="Navbutton">sign in</button></Link>
                    </div>
                </div>
                <br />
                <div className="LNav">
                    <LowerNav />
                </div>
            </div>
        </>
    )
}

export default Navbar