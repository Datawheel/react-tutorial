import React from "react";
import {render} from "react-dom";
import Hello from "components/Hello";
import Toggle from "components/Toggle";

render(
  <div id="component">
    <Hello name="World" />
    <Toggle>
      Here is some <span className="child">child</span> content.
    </Toggle>
    <img src="/static/datawheel.png" />
  </div>, document.getElementById("app"));
