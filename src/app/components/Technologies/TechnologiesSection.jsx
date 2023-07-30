"use client";
import React from "react";
import Styles from "./styles/Technologies.module.css";
import react from "@/app/assets/tech/react.svg";
import adobeP from "@/app/assets/tech/adobeP.svg";
import aws from "@/app/assets/tech/aws.svg";
import docker from "@/app/assets/tech/docker.svg";
import figma from "@/app/assets/tech/figma.svg";
import firebase from "@/app/assets/tech/firebase.svg";
import flutter from "@/app/assets/tech/flutter.svg";
import mongodb from "@/app/assets/tech/mongoDB.svg";
import mysql from "@/app/assets/tech/mySql.svg";
import nest from "@/app/assets/tech/nest.svg";
import next from "@/app/assets/tech/next.svg";
import node from "@/app/assets/tech/node.svg";
import postgres from "@/app/assets/tech/postgres.svg";
import sql from "@/app/assets/tech/sql.svg";
import typescript from "@/app/assets/tech/typescript.svg";
import express from "@/app/assets/tech/express.svg";
import { v4 as uuid } from "uuid";
import EachTechnologies from "./EachTechnologies";
const techInfo = [
  {
    category: "Front-end",
    tech: [
      {
        name: "React",
        image: react,
      },
      {
        name: "Next.js",
        image: next,
      },
      {
        name: "TypeScript",
        image: typescript,
      },
    ],
  },
  {
    category: "Back-end",
    tech: [
      {
        name: "Node",
        image: node,
      },
      {
        name: "Nest",
        image: nest,
      },
      {
        name: "Express",
        image: express,
      },
    ],
  },
  {
    category: "Database",
    tech: [
      {
        name: "PostgreSQL",
        image: postgres,
      },
      {
        name: "MySQL",
        image: mysql,
      },
      {
        name: "MongoDB",
        image: mongodb,
      },
    ],
  },
  {
    category: "Devops",
    tech: [
      {
        name: "AWS",
        image: aws,
      },
      {
        name: "Docker",
        image: docker,
      },
      {
        name: "Firebase",
        image: firebase,
      },
    ],
  },
  {
    category: "Mobile Development",
    tech: [
      {
        name: "Flutter",
        image: flutter,
      },
      {
        name: "React Native",
        image: react,
      },
    ],
  },
  {
    category: "UI/UX Design",
    tech: [
      {
        name: "Figma",
        image: figma,
      },
      {
        name: "Adobe Photoshop",
        image: adobeP,
      },
    ],
  },
];

const TechnologiesSection = () => {
  return (
    <div className={Styles.container}>
      {techInfo.map((items) => (
        <EachTechnologies items={items} key={uuid()} />
      ))}
    </div>
  );
};

export default TechnologiesSection;
