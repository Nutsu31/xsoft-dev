"use client";
import Styles from "./Wallpaper.module.css";
import React from "react";
import Vid from "@/app/[lang]/assets/vid2.mp4";
import Image from "next/image";
import bg from "@/app/[lang]/assets/w1.png";
import { useMediaQuery } from "@mui/material";
import { Link as LinkScroll } from "react-scroll";
const WallpaperSection = ({ lang }) => {
  const max800px = useMediaQuery("(max-width:800px)");
  return (
    <div className={Styles.imgWrapper}>
      <div className={Styles.imgShadow}>
        {max800px ? (
          <Image src={bg} alt="" className={Styles.img} />
        ) : (
          <video loop muted autoPlay className={Styles.video}>
            <source src={Vid} type="video/mp4" />
          </video>
        )}
      </div>
      <div className={Styles.shadow}>
        <h1 className={Styles.headerTxt}>{lang.Main.headerText}</h1>
        <p className={Styles.infoTxt}>{lang.Main.InfoText}</p>

        <LinkScroll
          activeClass="active"
          to="contactUs"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          {" "}
          <button className={Styles.btn}>{lang.Main.ContactBtn}</button>
        </LinkScroll>
      </div>
    </div>
  );
};

export default WallpaperSection;
