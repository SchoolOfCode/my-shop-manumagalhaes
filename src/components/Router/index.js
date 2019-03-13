import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import StoreSelector from "../StoreSelector";
import App from "../App";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StoreSelector} />
          <Route path="/:store" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
