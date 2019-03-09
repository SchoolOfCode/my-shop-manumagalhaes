import React, { Component } from "react";
import css from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.headline}>App</h1>
      </div>
    );
  }
}

export default App;
