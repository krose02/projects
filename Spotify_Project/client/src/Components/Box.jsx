import React from "react";
import PropTypes from "prop-types";
import { Card, Button, ListGroup } from "react-bootstrap";

const Box = props => {
  return (
    <div>
      <Card {...props.cardprops}>
        <Card.Header>{props.user_name}</Card.Header>
        {/* <Card.Img width="100%" src="" alt="Card image cap" /> */}
        {/* <Card.Body> */}
        <ListGroup variant="flush">
          <ListGroup.Item>Hi</ListGroup.Item>
          <ListGroup.Item>Hi</ListGroup.Item>
          <ListGroup.Item>Hi</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button type="link" variant="info">
            See More
          </Button>
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
