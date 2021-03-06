import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { styles } from './ClassNames';

const Header = () => {
    const { header, headerLinkActive, headerLinkInactive } = styles;

    const links = [
        { text: "Inicio", url: "/" },
        { text: "Algoritmos", url: "/algoritmos" },
    ];

    const location = useLocation();

    return (
        <div className={header}>
            {links.map((link) => (
                <Link key={link.text} to={link.url} my={4} mx={8}>
                    <a className={location.pathname === link.url
                        ? `${headerLinkActive}`
                        : `${headerLinkInactive}`
                    }>{link.text}</a>
                </Link>
            ))}
        </div>
    );
}
 
export default Header;