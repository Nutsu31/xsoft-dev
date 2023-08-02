"use client"
import React from "react";
import CasesArray from "./cases-data";
import "./cases.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";

const Cases = ({lang}) => {
  return (
    <div className="cases-section">
      <h1 className="cases-title">{lang}</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {CasesArray.map((item, index) =>
            index === 0 ? ( // Check if index is 0
              <Grid xs={6} md={8} key={index}>
                <div className="cases-box">
                  <div className="cases-info">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <Image
                    src={item.img}
                    width={700}
                    height={600}
                    alt={item.title}
                  />
                </div>
              </Grid>
            ) : index === CasesArray.length - 1 ? (
              <Grid xs={2} sm={4} md={4} key={index}>
                <LinkScroll
                  activeClass="active"
                  to="contactUs"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  <div className="add-project">
                    <div className="add-project-box">
                      <div className="add-line"></div>
                      <div className="add-line"></div>
                    </div>
                  </div>
                </LinkScroll>
              </Grid>
            ) : (
              // For other indices (not 0 or 5)
              <Grid xs={2} sm={4} md={4} key={index}>
                <div className="cases-box">
                  <div className="cases-info">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <Image
                    src={item.img}
                    width={700}
                    height={600}
                    alt={item.title}
                  />
                </div>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Cases;
