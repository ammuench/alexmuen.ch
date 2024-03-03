import React, { AnchorHTMLAttributes } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type NavLinkProps = {
  path: string;
  text: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const NavLink = ({ path, text, ...others }: NavLinkProps): JSX.Element => {
  const isActive = useRouter().pathname === path;
  return (
    <Link href={path}>
      <a
        className={`c_header__link ${isActive ? "c_header__link--active" : ""}`}
        {...others}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
