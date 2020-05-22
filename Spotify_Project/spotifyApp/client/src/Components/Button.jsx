import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import { user_names } from "../DataUtils";

const Button = props => {
  const [loaded, setLoading] = useState(false);
  const friends = user_names;
  const cardProps = {
    bg: "light",
    border: "secondary"
  };

  return (
    <div>
      <div>
        <button onClick={() => setLoading(true)}> {props.text}</button>
      </div>
      {loaded && (
        <div className="Box">
          {friends.map(function(friend, key) {
            return <Box key={key} user_name={friend} cardprops={cardProps} />;
          })}
        </div>
      )}
    </div>
  );
};
Button.propTypes = {
  text: PropTypes.string
};
Button.defaultProps = {
  text: ""
};

export default Button;
