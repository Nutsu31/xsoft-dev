import React from "react";
import Styles from "./styles/ServiceOperations.module.css";
import EachOperation from "./EachOperation";
import {
  Message,
  Article,
  Analytics,
  DesignServices,
  DeveloperMode,
  Settings,
  RocketLaunch,
} from "@mui/icons-material";

const infoArr = [
  {
    headerTxt: "Consultation",
    bodyTxt:
      "We will discuss the details of your project and select the best solution in accordance with the tasks and budget.",
    Icon: Message,
  },
  {
    headerTxt: "Preparation of terms of reference",
    bodyTxt:
      "We will evaluate and draw up a technical task with the exact terms, budget and functionality of the product.",
    Icon: Article,
  },
  {
    headerTxt: "Analytics",
    bodyTxt:
      "We will conduct a marketing analysis" +
      " and develop a prototype of the future product.",
    Icon: Analytics,
  },
  {
    headerTxt: "Design",
    bodyTxt:
      "We will develop a convenient and adaptive interface for the product.",
    Icon: DesignServices,
  },
  {
    headerTxt: "Development",
    bodyTxt:
      "We will select a suitable technology stack and implement the technical part of the project.",
    Icon: DeveloperMode,
  },
  {
    headerTxt: "Testing",
    bodyTxt:
      "We will conduct tests to make sure there are no errors and shortcomings.",
    Icon: Settings,
  },
  {
    headerTxt: "Launch and support",
    bodyTxt: "We will ensure a successful product launch and maintenance.",
    Icon: RocketLaunch,
  },
];
const ServiceOperations = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {infoArr.map((item) => (
        <EachOperation
          headerTxt={item.headerTxt}
          bodyTxt={item.bodyTxt}
          Icon={item.Icon}
        />
      ))}
    </div>
  );
};

export default ServiceOperations;
