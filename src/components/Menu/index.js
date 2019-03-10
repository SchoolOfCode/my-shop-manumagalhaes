import React from "react";

import { formatPrice } from "../../utils";
import css from "./Menu.module.css";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <h2>Menu</h2>
        <ul className={css.list}>
          {Object.keys(this.props.items).map(key => (
            <li key={key} className={css.itemContainer}>
              <div
                className={css.image}
                style={{
                  color: "red",
                  backgroundImage: `url(${this.props.items[key].imageUrl})`
                }}
                alt={this.props.items[key].name}
              />
              <div className={css.content}>
                <div className={css.itemHeader}>
                  <h3 className={css.title}>{this.props.items[key].name}</h3>
                  <p className={css.price}>
                    {formatPrice(this.props.items[key].price)}
                  </p>
                </div>
                <p className={css.text}>{this.props.items[key].description}</p>
                <button className={css.button}>Add To Order</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
