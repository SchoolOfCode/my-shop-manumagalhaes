import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import StoreSelector from "../StoreSelector";
import App from "../App";
import Drinks from "../Drinks";
import Homepage from "../Homepage";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/store/:store" component={App} />
                    <Route path="/drinks" component={Drinks} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
