import React, {useState} from 'react';
import './navbar.css';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ navbarLinks }) => {

    const [menuClicked, setMenuClicked] = useState(false);
    const onToggleMenu = () => setMenuClicked(prev => !prev);

    return (
        <nav className="navbar">
            <span className="navbar__logo">travel</span>
            {
                menuClicked
                ? <FiX size={25} className="navbar__menu" onClick={onToggleMenu} />
                : <FiMenu size={25} className="navbar__menu" onClick={onToggleMenu} />
            }
            <ul className={`navbar__list${menuClicked ? ' navbar__list--active': ''}`}>
                {
                    navbarLinks.map( (link, index) => 
                        <li key={`${link.title}_${index}`} className="navbar__item">
                            <a href={link.url} className="navbar__link" title={link.title}>{link.title}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default Navbar;