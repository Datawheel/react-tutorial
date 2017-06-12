import React from "react";
import "./Toggle.css";

export default class Toggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  onClick() {
    console.log("click");
    const {active} = this.state;
    this.setState({active: !active});
  }

  render() {
    const {children} = this.props;
    const {active} = this.state;

    return <div className={ active ? "toggle active" : "toggle" }>
      { children }<button onClick={ this.onClick.bind(this) }>Click Me!</button>
    </div>;
  }

}
