import React from "react";
import { ReactiveBase } from "@appbaseio/reactivesearch";
import keys from '../config/keys';
import LeftColumn from "./LeftColumn";
import Card from "./Card";

const Dashboard = () => {
  return (
    <ReactiveBase
      app="housing-dev"
      credentials={keys.credentials}
      type="listing"
      theme={{
        primaryColor: "#FF3A4E"
      }}
    >
      <LeftColumn />
      <Card />
    </ReactiveBase>
  );
};

export default Dashboard;
