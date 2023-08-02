import React from "react";
import "./Footer.scss";
import Logo1 from "@/app/[lang]/assets/xsoft12.png";
import Image from "next/image";
import Link from "next/link";
import { BiLogoLinkedin, BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="first-box">
          <div className="logo">
            <Image src={Logo1} alt="Logo" />
          </div>
          <p>all rights reserved</p>
        </div>
        <div className="second-box">
          <div className="number">
            <Link href="tel:+995-568-454-235">+995 568-454-235</Link>
          </div>
          <div className="mail">
            <Link href="mailto:welcome@Xsoft.ge">welcome@Xsoft.ge</Link>
          </div>
          <div className="contact-icons">
            <Link href="#">
              <BiLogoLinkedin />
            </Link>
            <Link href="#">
              <BiLogoFacebook />
            </Link>
            <Link href="#">
              <BiLogoTelegram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
