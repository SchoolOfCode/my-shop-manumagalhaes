import React from "react";
import PropTypes from "prop-types";

import { formatPrice } from "../../utils";
import css from "./OrderItem.module.css";

const OrderItem = ({
  name,
  price,
  quantity,
  addToOrder,
  removeFromOrder,
  deleteFromOrder
}) => (
  <li className={css.item}>
    <span className={css.name}>{name}</span>
    <span className={css.at}> @ </span>
    <span className={css.price}>{formatPrice(price)}</span>
    <span className={css.x}> x </span>
    <button onClick={removeFromOrder}>-</button>
    <span className={css.quantity}>{quantity}</span>
    <button onClick={addToOrder}>+</button>
    <span className={css.delete} onClick={deleteFromOrder}>
      Remove
    </span>
  </li>
);

OrderItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  addToOrder: PropTypes.func,
  removeFromOrder: PropTypes.func,
  deleteFromOrder: PropTypes.func
};

export default OrderItem;
