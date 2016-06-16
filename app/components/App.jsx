import React from "react";

// import components
import Greeting from "./Greeting";

// import helpers
import randomBoolean from "../helpers/boolean";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Greeting nice={randomBoolean()} />;
  }

}
