import React from "react";

import { formatPrice } from "../../utils";
import css from "./Order.module.css";

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const item = this.props.stock[key];
      const count = this.props.order[key];
      return prevTotal + count * item.price;
    }, 0);
    return (
      <div>
        <h2>Order</h2>
        <ul>
          {orderIds.map(item => (
            <li key={item} className={css.item}>
              <span className={css.name}>{this.props.stock[item].name}</span>
              <span className={css.at}> @ </span>
              <span className={css.price}>
                {formatPrice(this.props.stock[item].price)}
              </span>
              <span className={css.x}> x </span>
              <span className={css.quantity}>{this.props.order[item]}</span>
            </li>
          ))}
        </ul>
        <p className={css.total}>
          Total: <span className={css.totalPrice}>{formatPrice(total)}</span>
        </p>
      </div>
    );
  }
}

export default Order;
