import React from "react";
import "./Header.scss";
import Image from "next/image";
import Logo from "../../assets/Logo.jpg";
import Link from 'next/link';


const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
        <Link href="/">
          <Image
            src={Logo}
            alt="Picture of the author"
          />
          
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
