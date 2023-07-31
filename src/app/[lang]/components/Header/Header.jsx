'use client';
import React, { useState, useEffect } from "react";
import "./Header.scss";
import Image from "next/image";
import Logo1 from "@/app/[lang]/assets/xsoft12.png";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Georgia from '../../assets/georgia.jpg';
import England from '../../assets/england.png';
// import {ServerComponent} from "../ServerRouter/ServerComponent";

const Header = ({lang,params}) => {
  const [menu, setMenu] = useState(false);
  const menuBtnHandler = () => {
    setMenu(!menu);
  };

  function smoothScrollToTop() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(smoothScrollToTop);
      window.scrollTo(0, scrollTop - scrollTop / 8);
    }
  }
  const path = usePathname();
  useEffect(() => {
    smoothScrollToTop();
  }, [path]);

  return (
    <>
      <header style={{ display: menu ? "none" : "flex" }}>
        <div className="header-container">
          <div className="logo">
            <Link href="/">
              <Image src={Logo1} alt="Picture of the author" />
            </Link>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link href="/">{lang.Header.Home}</Link>
              </li>
              <li>
                <Link href="/services">{lang.Header.Services}</Link>
              </li>
              <li>
                <Link href="/about-company">{lang.Header.About}</Link>
              </li>
              <li>
                <Link href="/contact">{lang.Header.Contact}</Link>
              </li>
              <li>
                { params ==='en' ? (
                  <Image src={Georgia} alt="Picture of the author" />
                ) : (
                  <Image src={England} alt="Picture of the author" />
                )}
              </li>
            </ul>
          </div>
          <div className="burger-menu-icons" onClick={menuBtnHandler}>
            <BiMenu className="svg-menu" />
          </div>
        </div>
      </header>

      <div className="mobile-menu" style={{ left: menu ? "0" : "-100%" }}>
        <div className="logo-button">
          <div className="logo">
            <Link href="/">
              <Image src={Logo1} alt="Picture of the author" />
            </Link>
          </div>

          <div className="burger-menu" onClick={menuBtnHandler}>
            <BiX className="svg-menu" />
          </div>
        </div>

        <div className="menu">
          <ul>
            <li onClick={menuBtnHandler}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={menuBtnHandler}>
              <Link href="/services">Services</Link>
            </li>

            <li onClick={menuBtnHandler}>
              <Link href="/about-company">About</Link>
            </li>
            <li onClick={menuBtnHandler}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;