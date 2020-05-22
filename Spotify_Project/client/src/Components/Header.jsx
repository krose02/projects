import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return <div>{props.text}</div>;
};
Header.propTypes = {
  text: PropTypes.string
};
Header.defaultProps = {
  text: ""
};
export default Header;
