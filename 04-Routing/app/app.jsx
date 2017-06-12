import React from "react";
import {render} from "react-dom";
import {browserHistory, IndexRoute, Route, Router} from "react-router";

import Base from "components/Base";
import Hello from "components/Hello";
import Toggle from "components/Toggle";

render(
  <Router history={browserHistory}>
    <Route path="/" component={Base}>
      <IndexRoute component={Hello} />
      <Route path="toggle" component={Toggle} />
    </Route>
  </Router>, document.getElementById("app"));
