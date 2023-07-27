import React from "react";
import Styles from "./Wallpaper.module.css";
import Wallpaper from "@/app/assets/wallpaper.png";
import Image from "next/image";
const WallpaperSection = () => {
  return (
    <div className={Styles.imgWrapper}>
      <div className={Styles.imgShadow}>
        <Image src={Wallpaper} alt="wallpaper" className={Styles.img} />
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
