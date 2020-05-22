import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const Box = props => {
  return (
    <div>
      <Card {...props.cardprops}>
        <Card.Img width="100%" src="" alt="Card image cap" />
        <Card.Body>
          <Card.Title>{props.user_name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button>Button</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

Box.propTypes = {
  user_name: PropTypes.string.isRequired,
  cardprops: PropTypes.shape({
    bg: PropTypes.string,
    border: PropTypes.string
  })
};
Box.defaultProps = {
  user_name: null,
  cardprops: {}
};
export default Box;
