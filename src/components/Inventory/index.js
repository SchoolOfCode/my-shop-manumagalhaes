import React from "react";
import PropTypes from "prop-types";

import Heading from "../Heading";
import AddItemForm from "../AddItemForm";

const Inventory = ({ onLoadClick, onSubmit }) => (
  <div>
    <Heading>Inventory</Heading>
    <AddItemForm onSubmit={onSubmit} />
    <button className="button" onClick={onLoadClick}>
      Load Sample Data
    </button>
  </div>
);

Inventory.propTypes = {
  onLoadClick: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Inventory;
