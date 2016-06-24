import React from "react";

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const c = this.props.nice ? "nice" : "mean";
    return (
      <div>
        <img className="logo" src="public/img/datawheel-icon.png" />
        <h1 className={c}>{this.props.nice ? "Hello World" : "Goodbye World"}</h1>
      </div>
    );
  }
}

Greeting.propTypes = {nice: React.PropTypes.bool};
