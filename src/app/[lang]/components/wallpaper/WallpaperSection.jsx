"use client";
import Styles from "./Wallpaper.module.css";
import React from "react";
import Vid from "@/app/[lang]/assets/vid2.mp4";
import Image from "next/image";
import bg from "@/app/[lang]/assets/w1.png";
import { useMediaQuery } from "@mui/material";
const WallpaperSection = () => {
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
        <h1 className={Styles.headerTxt}>
          Development of mobile and web applications on a turnkey basis
        </h1>
        <p className={Styles.infoTxt}>
          Development of websites, mobile applications, online stores and
          internal portals on a turnkey basis. We ll find a solution that fits
          your budget and time frame.
        </p>
        <button className={Styles.btn}>Contact us</button>
      </div>
    </div>
  );
};

export default WallpaperSection;