import React, {useState} from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib"
import Cookies from 'universal-cookie';

function Navbar(){
    const cookies = new Cookies();

    const [click, setClick] = useState(false)

    const handleclick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }

    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo"  onClick={closeMobileMenu}>
                    Campusbook
                </Link>
                <div className="menu-icon" onClick={handleclick}>
                    {click ? <FaTimes /> : <FaBars/>}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                            Home</NavLink>
                        
                    </li>

                    <li className="nav-item">
                        <NavLink to="/homeRoom" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                            Room</NavLink>
                        
                    </li>

                    <li className="nav-item">
                        <NavLink to="/epreuve" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                            Epreuves</NavLink>
                        
                    </li>

                    <li className="nav-item nav-links">
                        <div className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={logout}>
                            Logout
                        </div>
                    </li>

                    

                </ul>
            </div>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;