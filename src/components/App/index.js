import React, { Component } from "react";

import Menu from "../Menu";
import Order from "../Order";
import Inventory from "../Inventory";
import sampleData from "../../sample-data";

import css from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: {}
    };
  }

  loadSampleData = () => {
    this.setState(state => ({
      stock: { ...state.stock, ...sampleData }
    }));
  };

  addNewItem = item => {
    this.setState(state => ({
      stock: { ...state.stock, [`item${Date.now()}`]: item }
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.headline}>My Smart Eatery</h1>
        <div className={css.content}>
          <Menu items={this.state.stock} />
          <Order />
          <Inventory
            onLoadClick={this.loadSampleData}
            onSubmit={this.addNewItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
