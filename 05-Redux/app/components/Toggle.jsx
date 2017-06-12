import React from "react";
import {connect} from "react-redux";
import "./Toggle.css";

import {updateActive} from "../actions";

class Toggle extends React.Component {

  onClick() {
    console.log("click");
    const {active, dispatch} = this.props;
    dispatch(updateActive(!active));
  }

  render() {
    const {children} = this.props;
    const {active} = this.props;

    return <div className={ active ? "toggle active" : "toggle" }>
      { children }<button onClick={ this.onClick.bind(this) }>Click Me!</button>
    </div>;
  }

}

Toggle = connect(state => ({
  active: state.active
}))(Toggle);

export default Toggle;
