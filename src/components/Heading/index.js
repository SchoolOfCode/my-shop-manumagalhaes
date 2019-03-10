import React from "react";
import PropTypes from "prop-types";

import css from "./Heading.module.css";

const Heading = ({ children }) => (
  <h2 className={css.withBorder}>{children}</h2>
);

Heading.propTypes = {
  children: PropTypes.string
};

export default Heading;
