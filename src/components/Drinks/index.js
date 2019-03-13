import React from "react";
import PropTypes from "prop-types";

import Heading from "../Heading";

//import css from "./Drinks.module.css";

const Drinks = ({ items, addToOrder }) => (
    <div>
        <Heading>Drinks</Heading>
    </div>
);

Drinks.propTypes = {
    items: PropTypes.object,
    addToOrder: PropTypes.func
};

export default Drinks;
