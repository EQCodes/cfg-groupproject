import React from "react";
import "../../../styles/CreateYourList.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
