import React from "react";
import PropTypes from "prop-types";

import { formatPrice } from "../../utils";
import css from "./MenuItem.module.css";

const MenuItem = ({ imageUrl, name, price, description, onClick }) => (
  <li className={css.itemContainer}>
    <div
      className={css.image}
      style={{
        color: "red",
        backgroundImage: `url(${imageUrl})`
      }}
      alt={name}
    />
    <div className={css.content}>
      <div className={css.itemHeader}>
        <h3 className={css.title}>{name}</h3>
        <p className={css.price}>{formatPrice(price)}</p>
      </div>
      <p className={css.text}>{description}</p>
      <button className={`button ${css.button}`} onClick={onClick}>
        Add To Order
      </button>
    </div>
  </li>
);

MenuItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  onClick: PropTypes.func
};

export default MenuItem;
