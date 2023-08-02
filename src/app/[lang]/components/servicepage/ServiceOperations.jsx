import React from "react";
import Styles from "./styles/ServiceOperations.module.css";
import EachOperation from "./EachOperation";
import { v4 as uuid } from "uuid";
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
    Icon: Message,
  },
  {
    Icon: Article,
  },
  {
    Icon: Analytics,
  },
  {
    Icon: DesignServices,
  },
  {
    Icon: DeveloperMode,
  },
  {
    Icon: Settings,
  },
  {
    Icon: RocketLaunch,
  },
];
const ServiceOperations = ({lang}) => {
  console.log(lang)
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {lang.infoArr.map((item,index) => (
        <EachOperation
          key={uuid()}
          headerTxt={item.headerTxt}
          bodyTxt={item.bodyTxt}
          Icon={infoArr[index].Icon}
        />
      ))}
    </div>
  );
};

export default ServiceOperations;
