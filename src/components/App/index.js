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
      stock: {},
      order: {}
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

  addToOrder = key => {
    this.setState(state => ({
      order: { ...state.order, [key]: state.order[key] + 1 || 1 }
    }));
  };

  removeFromOrder = key => {
    this.setState(state => {
      const order = { ...state.order };
      if (!order[key] || order[key] < 2) {
        delete order[key];
      } else {
        order[key] = order[key] - 1;
      }
      return {
        order
      };
    });
  };

  deleteFromOrder = key => {
    this.setState(state => {
      const order = { ...state.order };
      delete order[key];
      return {
        order
      };
    });
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.headline}>My Smart Eatery</h1>
        <div className={css.content}>
          <Menu items={this.state.stock} addToOrder={this.addToOrder} />
          <div className={css.panel}>
            <Order
              order={this.state.order}
              stock={this.state.stock}
              addToOrder={this.addToOrder}
              removeFromOrder={this.removeFromOrder}
              deleteFromOrder={this.deleteFromOrder}
            />
            <Inventory
              onLoadClick={this.loadSampleData}
              onSubmit={this.addNewItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
