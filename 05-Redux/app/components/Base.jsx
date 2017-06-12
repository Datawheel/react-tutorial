import React from "react";
import {Link} from "react-router";

export default class Base extends React.Component {

  render() {
    const {children} = this.props;

    return <div className="base">
      <Link to="/">Home</Link>
      <Link to="/toggle">Toggle</Link>
      { children }
    </div>;
  }

}
