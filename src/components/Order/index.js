import React from "react";
import PropTypes from "prop-types";

import Heading from "../Heading";
import OrderItem from "../OrderItem";

import { formatPrice } from "../../utils";
import css from "./Order.module.css";

const Order = ({
  stock,
  order,
  addToOrder,
  removeFromOrder,
  deleteFromOrder
}) => {
  const orderIds = Object.keys(order);

  const total = orderIds.reduce((prevTotal, key) => {
    const item = stock[key];
    const count = order[key];
    return prevTotal + count * item.price;
  }, 0);
  return (
    <div>
      <Heading>Order</Heading>
      <ul>
        {orderIds.map(
          item =>
            order[item] && (
              <OrderItem
                addToOrder={() => addToOrder(item)}
                removeFromOrder={() => removeFromOrder(item)}
                deleteFromOrder={() => deleteFromOrder(item)}
                key={item}
                name={stock[item].name}
                price={stock[item].price}
                quantity={order[item]}
              />
            )
        )}
      </ul>
      <p className={css.total}>
        Total: <span className={css.totalPrice}>{formatPrice(total || 0)}</span>
      </p>
    </div>
  );
};

Order.propTypes = {
  stock: PropTypes.object,
  order: PropTypes.object,
  addToOrder: PropTypes.func,
  removeFromOrder: PropTypes.func,
  deleteFromOrder: PropTypes.func
};

export default Order;
