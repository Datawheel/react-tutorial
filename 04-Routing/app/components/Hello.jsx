import React from "react";
import "./Hello.css";

function Hello(props) {
  return <div className="hello">Hello { props.name }</div>;
}

Hello.defaultProps = {
  name: "World"
};

export default Hello;
