import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

interface NavLinkProps {
    path: string;
    text: string;
}


const NavLink = ({ path, text }: NavLinkProps): JSX.Element => {
    const isActive = useRouter().pathname === path;
    return (
        <Link href={path}>
            <a className={`c_header__link ${isActive ? 'c_header__link--active' : ''}`}>{text}</a>
        </Link>
    )
}

export default NavLink;