import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.png";
import eleven from "public/images/icon/11.svg";

const Header = ({ handleSearch, handleSidebar }: any) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-open" : "";
  };

  return (
    <nav className="navbar navbar-area navbar-area-2 navbar-expand-lg">
      <div className="container nav-container navbar-bg">
        <div className="responsive-mobile-menu">
          <button
            className={
              (toggleMenu ? " open" : " ") +
              " menu toggle-btn d-block d-lg-none"
            }
            data-target="#itech_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <span className="icon-left"></span>
            <span className="icon-right"></span>
          </button>
        </div>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav-right-part nav-right-part-mobile">
          <a className="search-bar-btn pointer" onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </a>
        </div>
        <div
          className={
            (toggleMenu ? " sopen" : " ") + " collapse navbar-collapse"
          }
          id="itech_main_menu"
        >
          <ul className="navbar-nav menu-open text-lg-end">
            <li>
                  <Link href="/">Home</Link>
                </li>
            
            <li>
                  <Link href="/about">About Us</Link>
                </li>
               <li>
                  <Link href="/products">Products</Link>
                </li>
             
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      <div className="nav-right-part nav-right-part-desktop align-self-center">
         {/**   <a
            className="menubar pointer"
            id="navigation-button"
            onClick={handleSidebar}
          >
            <Image src={eleven} alt="Image" />
          </a> */}
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
