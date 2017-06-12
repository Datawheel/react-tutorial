import React from "react";
import {render} from "react-dom";
import {browserHistory, IndexRoute, Route, Router} from "react-router";
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import {routerMiddleware, routerReducer, syncHistoryWithStore} from "react-router-redux";

import createLogger from "redux-logger";

import Base from "components/Base";
import Hello from "components/Hello";
import Toggle from "components/Toggle";

import activeReducer from "reducers.js";

const middleware = [routerMiddleware(browserHistory), createLogger()];

const reducers = combineReducers({
  active: activeReducer,
  routing: routerReducer
});

const store = createStore(reducers, {active: false}, compose(
  applyMiddleware(...middleware),
  typeof window === "object" && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : f => f
));

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Base}>
        <IndexRoute component={Hello} />
        <Route path="toggle" component={Toggle} />
      </Route>
    </Router>
  </Provider>, document.getElementById("app"));
