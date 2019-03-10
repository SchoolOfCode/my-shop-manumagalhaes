import React from "react";

import { formatPrice } from "../../utils";
import css from "./OrderItem.module.css";

const OrderItem = ({ name, price, quantity }) => (
  <li className={css.item}>
    <span className={css.name}>{name}</span>
    <span className={css.at}> @ </span>
    <span className={css.price}>{formatPrice(price)}</span>
    <span className={css.x}> x </span>
    <span className={css.quantity}>{quantity}</span>
  </li>
);

export default OrderItem;
