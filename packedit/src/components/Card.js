import React from "react";
import "../../../styles/CreateYourList.scss";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
