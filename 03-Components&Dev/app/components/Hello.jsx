import React from "react";
import "./Hello.css";

export default function Hello(props) {
  return <div className="hello">Hello { props.name }</div>;
}
