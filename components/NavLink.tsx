import React from 'react';
import { useRouter } from 'next/router'

interface NavLinkProps {
    path: string;
    text: string;
}


const NavLink = ({ path, text }: NavLinkProps): JSX.Element => {
    const isActive = useRouter().pathname === path;
    return (
        <a href={path} className={`c_header__link ${isActive ? 'c_header__link--active' : ''}`}>{text}</a>
    )
}

export default NavLink;